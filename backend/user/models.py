from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    location = models.CharField(max_length=250, blank=True)
    phone = models.IntegerField(null=True, blank=True)
    things_i_love = models.CharField(max_length=250, blank=True)
    description = models.CharField(max_length=250, blank=True)
    avatar = models.ImageField(null=True, blank=True)
    pass

    def __str__(self):
        return f'ID {self.id} : {self.username}'
