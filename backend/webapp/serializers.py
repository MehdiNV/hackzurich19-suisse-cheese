from rest_framework import serializers
from .models import Articles


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ('title', 'timestamp')
        # fields = ('title')
        # fields = '__all__'
