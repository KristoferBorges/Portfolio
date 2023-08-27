from django.shortcuts import render


def home(request):
    return render(request, 'pages/home.html')

def historia(request):
    return render(request, 'pages/historia.html')