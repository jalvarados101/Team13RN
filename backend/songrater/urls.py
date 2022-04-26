from django.urls import path
from . import views
from .views import HomePageView , SearchResultsView , SignUpView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('search/', SearchResultsView.as_view(), name='search_results'),
    path('', HomePageView.as_view(), name='home'),
]