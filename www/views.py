from django.shortcuts import render

# Create your views here.

def home(request):
	return render(request, 'home.htm', {})

def team(request):
	return render(request, 'team.htm', {})

def login_view(request):
	return render(request, 'login.htm', {})	

def user(request):
	return render(request, 'user_area.htm', {})	

def user_edit(request):
	return render(request, 'user_edit.htm', {})	

def citas(request):
	return render(request, 'citas.htm', {})
	
def citas_ask(request):
	return render(request, 'citas_ask.htm', {})	

def tratamientos(request):
	return render(request, 'tratamientos.htm', {})	