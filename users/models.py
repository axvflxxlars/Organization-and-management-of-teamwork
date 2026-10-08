import uuid

from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, username, password=None):
        if not username:
            raise ValueError("Username is required")
        user = self.model(username=username)
        # Hashed with Argon2 (see PASSWORD_HASHERS in settings).
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=150, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Drop the last_login column inherited from AbstractBaseUser.
    last_login = None

    objects = UserManager()

    USERNAME_FIELD = "username"

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.username
