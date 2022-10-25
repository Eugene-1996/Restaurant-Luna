from rest_framework.generics import GenericAPIView, ListAPIView

from comment.serializers import CommentSerializer
from rest_framework.response import Response
from review.models import Review
from comment.models import Comment


class CreateComment(GenericAPIView):
    queryset = Review.objects.all()
    lookup_field = 'id'

    def post(self, request, *args, **kwargs):
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.post = self.get_object()
        serializer.save()
        return Response(serializer.data)


class DeleteComment(GenericAPIView):
    queryset = Comment.objects.all()
    lookup_field = 'id'

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)


class AllCommentByUser(ListAPIView):
    serializer_class = CommentSerializer
    lookup_field = 'id'

    def get_queryset(self):
        return Comment.objects.filter(user=self.kwargs['id'])
