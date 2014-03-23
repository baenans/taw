from django.shortcuts import render
from django.conf import settings
# Create your views here.

def home(request):
	context = {'ON_SERVER':settings.ON_SERVER}
	return render(request, 'home.htm', context)

def team(request):
	context = {'ON_SERVER':settings.ON_SERVER}
	return render(request, 'team.htm', context)

def login_view(request):
	context = {'ON_SERVER':settings.ON_SERVER}
	return render(request, 'login.htm', context)	

def user(request):
	context = {'ON_SERVER':settings.ON_SERVER}
	return render(request, 'user_area.htm', context)	

def user_edit(request):
	context = {'ON_SERVER':settings.ON_SERVER}
	return render(request, 'user_edit.htm', context)	

def citas(request):
	context = {'ON_SERVER':settings.ON_SERVER}
	return render(request, 'citas.htm', context)

def citas_ask(request):
	context = {'ON_SERVER':settings.ON_SERVER}
	return render(request, 'citas_ask.htm', context)	

def tratamientos(request):
	context = {'ON_SERVER':settings.ON_SERVER}
	return render(request, 'tratamientos.htm', context)	