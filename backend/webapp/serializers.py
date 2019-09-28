from rest_framework import serializers
from .models import Articles


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        # fields = ('title', 'journal', 'timestamp', 'body')
        # fields = ('title')
        fields = '__all__'
