from flask import Blueprint, render_template, request #manteve-se
from models.model import produtos

#manteve-se
arraso = Blueprint('arraso', __name__, template_folder='templates')
#diferente
@arraso.route('/') #uma rota normal 
def page1(): #uma função normal
    page = request.args.get('page', 1, type=int) #está lidando com a lista
    per_page = 3 #por 3 produtos 
    star= (page -1) * per_page  #calcula o índice star(inicial) da lista de produtos
    end = star + per_page #calcula o índice end(final) da lista de produtos, número de páginas anteriores pela página atual
    total_pages = (len(produtos) + per_page - 1) //per_page #calcula o número total de páginas que são necessárias para exibir os produtos
    produtos_on_page = produtos[star:end] #seleciona os produtos que serão mostrados na página atual. [star:end] começa por star e termina por end
    return render_template(template_name_or_list='page1.html', produtos_on_page=produtos_on_page, total_pages=total_pages, page=page)
 

  

