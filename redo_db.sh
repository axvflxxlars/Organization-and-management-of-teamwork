rm -f ./db.sqlite3
python manage.py makemigrations
python manage.py migrate
python manage.py seed_admins
python manage.py seed_refutations