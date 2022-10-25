import random

from django.db import models

from user.models import User


def code(length=6):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class Registration(models.Model):
    code = models.CharField(max_length=6, default=code)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='reg_profile')

    def __str__(self):
        return f'ID {self.id}: Reg code from : {self.user.username}'