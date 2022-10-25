from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from user.models import User


class Restaurant(models.Model):
    name = models.CharField(max_length=250, blank=False)
    category = models.CharField(max_length=250, blank=True)
    country = models.CharField(max_length=250, blank=True)
    street = models.CharField(max_length=250, blank=True)
    zip = models.IntegerField(blank=True)
    phone = models.IntegerField(blank=True)
    website = models.URLField(blank=True)
    email = models.EmailField(blank=True)
    opening_hours = models.CharField(max_length=250, blank=True)
    price_level = models.IntegerField(blank=False, validators=[MaxValueValidator(4), MinValueValidator(1)])
    image = models.ImageField(null=True, blank=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='restaurant')

    def __str__(self):
        return f'ID{self.id} : {self.name} by {self.user.first_name} {self.user.last_name}'
