window.onload = function () {
	
	
	var tabContent = document.getElementsByClassName('tabContent');
	var tab = document.getElementsByClassName('tab');
	var tabs = document.getElementById('tabs');
	var menu = document.getElementById('menu__info');
	var list = document.getElementsByClassName('tab__top');
	hideTabsContent(1);
	
	function hideTabsContent(a) {
		
		for (i=a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('white');
		}
	}
	
	function func(e) {
		var target = e.target;
		if( target.className=='tab' ) {
			for( var i=0; i < tab.length; i++ ) {
				if( target == tab[i] ) {
					showTabsContent( i );
					break;
				}
			}
		}
	}
	
	tabs.addEventListener('click', func)
	
	function showTabsContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			hideTabsContent(0);
			tab[b].classList.add('white');
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	menu.addEventListener('click', func2)
	function func2 (c) {
		var target = c.target;
		if( target.className=='link tab__top' ) {
			for( var e=0; e < list.length; e++ ) {
				if(target == list[e]) {
					showTabsContent( e );
					break;
				}
			}
		}
	}
	
	
	
	$(".user-pers").click(function () {
			$("#menu__info").animate({'top': "40px",
										'opacity': 1,
			}, 300);
	});
	var ul = $("#menu__info li a");
	$('.list__room').click(function (e) {
		e.stopPropagation();
		$("#menu__info").animate({'top': '-100vh',
			'opacity': 1,
		}, 300);
		
	});
	ul.click(function (e) {
		$("#menu__info").animate({'top': '-100vh',
			'opacity': 1,
		}, 300);
		
	});

	
};