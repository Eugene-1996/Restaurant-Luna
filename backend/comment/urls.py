from django.urls import path

from comment.views import CreateComment
from comment.views import AllCommentByUser
from comment.views import DeleteComment

urlpatterns = [
    path('<int:id>/', AllCommentByUser.as_view()),
    path('new/<int:id>/', CreateComment.as_view()),
    path('delete/<int:id>/', DeleteComment.as_view()),
]