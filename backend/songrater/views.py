from django.shortcuts import render
# from django.http import HttpResponse
# from django.contrib.auth.forms import UserCreationForm
# from django.urls import reverse_lazy
# from django.views import generic
from rest_framework import viewsets
from .serializers import SongRaterSerializer , RatingsSerializer , UserSerializer , SongSerializer
from .models import Ratings , SongRater , User , SongTable
# from django.views.generic import TemplateView, ListView

# class SignUpView(generic.CreateView):
#     form_class = UserCreationForm
#     success_url = reverse_lazy('login')
#     template_name = 'registration/signup.html'
# class HomePageView(TemplateView):
#     template_name = 'home.html'
# class SearchResultsView(ListView):
#     model = Ratings
#     template_name = 'search_results.html'
#     def get_queryset(self):
#         query = self.request.GET.get('q')
#         object_list = Ratings.objects.filter(
#             username__icontains=query
#         )
#         return object_list

class SongRaterView(viewsets.ModelViewSet):
    serializer_class = SongRaterSerializer
    queryset = SongRater.objects.all()

class RatingsView(viewsets.ModelViewSet):
    serializer_class = RatingsSerializer
    queryset = Ratings.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = SongTable.objects.all()