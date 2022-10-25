from django.db import models

from review.models import Review
from user.models import User


class Comment(models.Model):
    content = models.CharField(max_length=250)
    review = models.ForeignKey(to=Review, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    likes = models.ManyToManyField(to=User, blank=True, related_name='commentlikes')

    def __str__(self):
        return f'ID{self.id} comment from {self.user.username}'
