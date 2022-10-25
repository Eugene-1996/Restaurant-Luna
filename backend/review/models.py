from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from user.models import User
from restaurant.models import Restaurant


class Review(models.Model):
    content = models.CharField(max_length=250, blank=True)
    rating = models.IntegerField(blank=False, validators=[MaxValueValidator(5), MinValueValidator(1)])
    likes = models.ManyToManyField(to=User, blank=True, related_name='reviewlikes')
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='review')
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} comment on {self.restaurant.name}'
