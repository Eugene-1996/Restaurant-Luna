from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant

from restaurant.serializers import RestaurantSerializer


class AllRestaurants(GenericAPIView):
    queryset = ''

    def get(self, request, *args, **kwargs):
        restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)


class SingleRestaurant(GenericAPIView):
    queryset = Restaurant.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = RestaurantSerializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = RestaurantSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)


class NewRestaurant(GenericAPIView):
    queryset = ''

    def post(self, request, *args, **kwargs):
        serializer = RestaurantSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class UserFilterRestaurant(ListAPIView):
    serializer_class = RestaurantSerializer
    lookup_field = 'id'

    def get_queryset(self):
        return Restaurant.objects.filter(user=self.request.user)


class SelfRestaurants(GenericAPIView):
    queryset = ''

    def get(self, request, *args, **kwargs):
        instance = Restaurant.objects.filter(user=self.request.user)
        serializer = RestaurantSerializer(instance, many=True)
        return Response(serializer.data)
