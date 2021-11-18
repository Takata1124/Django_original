from django.shortcuts import render

# Create your views here.
def index(request):
    val = 'GoodBy'
    return render(request, 'index.html', context={'value': val})

def base(request):
    
    return render(request, 'base.html')