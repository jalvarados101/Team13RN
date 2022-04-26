from rest_framework import serializers
from .models import SongRater , Ratings , User , SongTable
from django.db.models import Avg

class SongRaterSerializer(serializers.ModelSerializer):
  class Meta:
    model = SongRater
    fields = ['id', 'title', 'description', 'completed']

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    exclude = ['password']

class SongSerializer(serializers.ModelSerializer):
  class Meta:
    model = SongTable
    fields = ['id', 'title', 'artist', 'genre', 'avg_rating']

class RatingsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Ratings
    fields = ['id', 'user', 'title', 'ratings']
  
  def create(self, validated_data):
    rating = Ratings(
      user = validated_data['user'],
      title = validated_data['title'],
      ratings = validated_data['ratings'],
    )
    rating.save()
    mySong = SongTable.objects.get(title=validated_data['title'])
    tempSong = Ratings.objects.all().filter(title=validated_data['title'])
    mySong.avg_rating = round(tempSong.aggregate(Avg('ratings'))['ratings__avg'], 2)
    mySong.save()
    
    return rating