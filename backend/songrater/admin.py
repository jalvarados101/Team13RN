import imp
from django.contrib import admin
from .models import SongTable , Ratings , ArtistTable , AlbumTable , SongRater , User

# admin.site.register(SongTable)
# admin.site.register(Ratings)
# admin.site.register(ArtistTable)
# admin.site.register(AlbumTable)

class SongRaterAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'completed']

class UserAdmin(admin.ModelAdmin):
    list_display = ['username']

class RatingsAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'title', 'ratings']

class SongAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'artist', 'genre', 'avg_rating']

admin.site.register(SongRater, SongRaterAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Ratings, RatingsAdmin)
admin.site.register(SongTable, SongAdmin)