from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from user.models import User
from user.serializers import UserSerializer
from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer


class AllUsers(GenericAPIView):
    queryset = User.objects.all()

    def get(self, request, *args, **kwargs):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class UserSelf(GenericAPIView):
    queryset = ''

    def get(self, request, *args, **kwargs):
        instance = User.objects.filter(email=self.request.user.email)
        serializer = UserSerializer(instance[0])
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = User.objects.filter(username=self.request.user.username)
        serializer = UserSerializer(instance[0], data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class SingleUser(GenericAPIView):
    queryset = User.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = UserSerializer(instance)
        return Response(serializer.data)


class SearchRestaurantView(GenericAPIView):
    queryset = ''

    def get(self, request, *args, **kwargs):
        found_users = Restaurant.objects.filter(name__contains=request.data['search'])
        serializer = RestaurantSerializer(found_users, many=True)
        return Response(serializer.data)
