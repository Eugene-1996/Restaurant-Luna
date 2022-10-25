from django.urls import path

from restaurant.views import AllRestaurants
from restaurant.views import NewRestaurant
from restaurant.views import UserFilterRestaurant
from restaurant.views import SingleRestaurant

urlpatterns = [
    path('', AllRestaurants.as_view()),
    path('<int:id>/', SingleRestaurant.as_view()),
    path('user/<int:id>/', UserFilterRestaurant.as_view()),
    path('new/', NewRestaurant.as_view())
]