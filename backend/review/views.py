from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response

from review.serializers import ReviewSerializer
from review.models import Review


class AllReviews(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = ''

    def get(self, request, *args, **kwargs):
        reviews = Review.objects.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)


class SingleReview(GenericAPIView):
    queryset = Review.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ReviewSerializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ReviewSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)


class PostReview(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = ''

    def post(self, request, *args, **kwargs):
        serializer = ReviewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class RestaurantReviews(ListAPIView):
    serializer_class = ReviewSerializer
    lookup_field = 'id'

    def get_queryset(self):
        return Review.objects.filter(restaurant=self.kwargs['id'])


class UserReviews(ListAPIView):
    serializer_class = ReviewSerializer
    lookup_field = 'id'

    def get_queryset(self):
        return Review.objects.filter(user=self.kwargs['id'])


class Rating(GenericAPIView):
    queryset = ''
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        filtered = Review.objects.filter(restaurant=self.kwargs['id'])
        rating = 0
        for item in filtered:
            rating += item.rating
        final_rating = rating / len(filtered)
        return Response(str(final_rating))