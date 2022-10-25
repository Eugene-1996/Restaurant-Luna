from django.urls import path

from user.views import AllUsers
from user.views import SingleUser
from user.views import UserSelf
from user.views import SearchRestaurantView

urlpatterns = [
    path('users/list', AllUsers.as_view()),
    path('users/<int:id>/', SingleUser.as_view()),
    path('me/', UserSelf.as_view()),
    path('search/', SearchRestaurantView.as_view()),
]