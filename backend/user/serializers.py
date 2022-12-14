from rest_framework import serializers

from user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['password', 'last_login', "is_superuser", "is_staff", "is_active", "groups", "user_permissions"]
