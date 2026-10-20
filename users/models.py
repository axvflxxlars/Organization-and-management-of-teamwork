import uuid
from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models


# that's dumb, but we turned out not to need it, but the migrations
# reference it already
class UserManager(UserManager): pass

class User(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    is_staff = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()
    USERNAME_FIELD = "username"

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.username
