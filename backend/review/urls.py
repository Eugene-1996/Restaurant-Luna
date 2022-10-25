from django.urls import path

from review.views import AllReviews
from review.views import RestaurantReviews
from review.views import UserReviews
from review.views import SingleReview
from review.views import PostReview
from review.views import Rating



urlpatterns = [
    path('', AllReviews.as_view()),
    path('<int:id>/', SingleReview.as_view()),
    path('restaurant/<int:id>/', RestaurantReviews.as_view()),
    path('user/<int:id>/', UserReviews.as_view()),
    path('new/', PostReview.as_view()),
    path('rating/<int:id>/', Rating.as_view()),
]