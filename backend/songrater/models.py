from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class User(models.Model):
    username = models.CharField(max_length=35, primary_key = True)
    password = models.CharField(max_length=100)
    def __str__(self):
        return self.username

class SongTable(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    genre = models.CharField(max_length=200)
    avg_rating = models.FloatField(default = 1.0, validators=[MinValueValidator(1.0),MaxValueValidator(5.0)])
    def __str__(self):
        return self.title

class ArtistTable(models.Model):
    artist = models.CharField(max_length=200, primary_key = True)
    dob = models.DateField(auto_now=False, auto_now_add=False)
    def __str__(self):
        return self.artist + str(self.dob)

class AlbumTable(models.Model):
    album = models.CharField(max_length=200, primary_key = True)
    genre = models.CharField(max_length=200)
    yob = models.DateField(auto_now=False, auto_now_add=False)
    def __str__(self):
        return self.album + self.genre + str(self.yob)

class SongRater(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    def __str__(self):
        return self.title

class Ratings(models.Model):
    # id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.ForeignKey(SongTable, on_delete=models.CASCADE)
    ratings = models.FloatField(default = 1.0, validators=[MinValueValidator(1.0),MaxValueValidator(5.0)])
    def __str__(self):
        return str(self.ratings)