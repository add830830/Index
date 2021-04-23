// Initialize the page
function init() {
	document.siteName = $('title').html();
	var html = `
<header >
   <div id="nav">
   </div>
</header>
<div>
<div id="content">
</div>
<br>
<footer class="text-muted">
<div class="container"> <p class="float-right"> <a href="#"><svg	 width="2em" height="2em" viewBox="0 0 416.979 416.979" fill="white"><path d="M208.489,416.979c115.146,0,208.49-93.344,208.49-208.489C416.979,93.344,323.635,0,208.489,0S0,93.343,0,208.489 		C0,323.635,93.343,416.979,208.489,416.979z M127.24,219.452l68.259-118.21c2.68-4.641,7.632-7.499,12.99-7.499 		s10.31,2.858,12.99,7.499l68.258,118.21c2.682,4.642,2.682,10.359,0.002,15c-2.68,4.642-7.631,7.501-12.99,7.501h-33.26v66.282 		c0,8.284-6.715,15-15,15h-40c-8.284,0-15-6.716-15-15v-66.282H140.23c-5.359,0-10.312-2.859-12.991-7.501 		C124.56,229.812,124.56,224.094,127.24,219.452z"/></svg></a> </p>
${UI.credit ? '<p align="center">Made with <svg HEART height="1.2em" width="1.2em" viewBox="0 0 299.995 299.995" class="bi bi-heart-fill" fill="white"><path d="M165.45,108.207l-9.788,9.786c-1.945,1.943-4.658,2.638-7.158,2.101c-1.541-0.241-3.009-0.936-4.173-2.103l-9.783-9.783 				c-6.549-6.546-15.149-9.822-23.749-9.822c-8.6,0-17.201,3.273-23.749,9.822c-12.82,12.823-12.698,33.374,0.283,47.805 				c13.232,14.708,49.605,45.027,62.666,55.788c13.061-10.758,49.442-41.085,62.677-55.788c12.978-14.428,13.1-34.982,0.28-47.805 				C199.859,95.115,178.55,95.112,165.45,108.207z"/> 			<path d="M149.995,0C67.156,0,0,67.158,0,149.995s67.156,150,149.995,150s150-67.163,150-150S232.834,0,149.995,0z 				 M224.239,166.417c-16.98,18.866-67.049,59.619-69.174,61.343c-1.489,1.211-3.286,1.826-5.07,1.74 				c-0.054,0.003-0.112,0.003-0.169,0.003c-1.725,0-3.46-0.571-4.902-1.743c-2.124-1.725-52.188-42.478-69.163-61.341 				c-18.612-20.689-18.49-50.445,0.283-69.218c19.161-19.164,50.344-19.164,69.506,0l4.448,4.448l4.451-4.451 				c19.161-19.161,50.341-19.159,69.508,0C242.726,115.975,242.848,145.731,224.239,166.417z"/></svg> by <a href="https://t.me/Go_odbye" target="_blank">Anuj Dakhore</a>,<br>A Boy Who Wants to Know Everything.</p>' : ''}
<p align="center"><a href="https://t.me/go_odbye"><svg Telegram width="2.5em" height="2.5em" viewBox="0 0 98.624 98.624" class="bi bi-heart-fill" fill="white"><path fill-rule="evenodd" d="M49.312,0C22.078,0,0,22.078,0,49.312s22.078,49.312,49.312,49.312s49.312-22.078,49.312-49.312S76.546,0,49.312,0z M77.051,22.919L66.01,74.771c-0.207,1.018-1.367,1.517-2.248,0.965L46.783,64.475l-8.931,8.311	c-0.795,0.68-2.026,0.349-2.372-0.639l-5.815-18.34L14.05,47.403c-1.198-0.546-1.181-2.454,0.047-2.931l60.956-23.237	C76.151,20.809,77.285,21.765,77.051,22.919z"/><polygon fill="white" points="37.356,66.708 38.348,57.28 65.886,30.362 32.642,52.194"/></path></svg></a> <a href="https://Fb.me/anuj.dakhore"><svg Facebook width="2.5em" height="2.5em" viewBox="0 0 98.624 98.624" class="bi bi-heart-fill" fill="white"><path d="M49.312,0C22.078,0,0,22.078,0,49.312s22.078,49.312,49.312,49.312s49.312-22.078,49.312-49.312S76.546,0,49.312,0z 	 M63.8,28.265c-2.344,0-4.703,0-7.046,0c-1.483-0.096-3.013,1.036-3.284,2.519c-0.032,2.567-0.016,5.133-0.016,7.7 	c3.443,0.016,6.887,0,10.331,0.016c-0.255,3.714-0.717,7.413-1.259,11.08c-3.045,0.032-6.09,0-9.135,0.016 	c-0.032,10.952,0.016,21.888-0.016,32.841c-4.528,0.016-9.039-0.016-13.567,0.016c-0.08-10.952,0-21.904-0.048-32.857 	c-2.2-0.016-4.416,0.016-6.616-0.016c0.016-3.683,0-7.365,0-11.032c2.2-0.032,4.416,0,6.616-0.016 	c0.064-3.571-0.064-7.158,0.064-10.729c0.239-2.854,1.307-5.707,3.428-7.668c2.567-2.439,6.201-3.268,9.645-3.364 	c3.635-0.032,7.27-0.016,10.904-0.016C63.816,20.597,63.816,24.423,63.8,28.265z"/></svg></a> <a href="https://Instagram.com/addakhore"><svg Instagram width="2.5em" height="2.5em" viewBox="0 0 98.624 98.624" class="bi bi-heart-fill" fill="white"><path d="M62.161,24.47H36.218c-6.492,0-11.774,5.282-11.774,11.774v26.181c0,6.492,5.282,11.774,11.774,11.774h25.943 		c6.492,0,11.774-5.282,11.774-11.774V36.244C73.935,29.752,68.653,24.47,62.161,24.47z M49.239,65.011 		c-8.8,0-15.959-7.083-15.959-15.789c0-8.706,7.16-15.789,15.959-15.789s15.959,7.083,15.959,15.789 		C65.198,57.928,58.039,65.011,49.239,65.011z M65.482,36.542c-2.074,0-3.755-1.681-3.755-3.755c0-2.074,1.681-3.755,3.755-3.755 		c2.074,0,3.755,1.681,3.755,3.755C69.237,34.861,67.556,36.542,65.482,36.542z"/> 	<path d="M49.312,0C22.078,0,0,22.078,0,49.312s22.078,49.312,49.312,49.312s49.312-22.078,49.312-49.312S76.546,0,49.312,0z 		 M79.759,62.425c0,9.704-7.895,17.598-17.598,17.598H36.218c-9.704,0-17.598-7.895-17.598-17.598V36.244 		c0-9.704,7.895-17.598,17.598-17.598h25.943c9.704,0,17.598,7.895,17.598,17.598V62.425z"/> 	<path d="M49.239,39.246c-5.595,0-10.146,4.475-10.146,9.976c0,5.501,4.551,9.976,10.146,9.976c5.595,0,10.146-4.475,10.146-9.976 		C59.385,43.721,54.834,39.246,49.239,39.246z"/></svg></a> <a href="https://twitter.com/anujdakhore"><svg Twitter width="2.5em" height="2.5em" viewBox="0 0 98.624 98.624" class="bi bi-heart-fill" fill="white"><path d="M49.312,0C22.078,0,0,22.078,0,49.312s22.078,49.312,49.312,49.312s49.312-22.078,49.312-49.312S76.546,0,49.312,0z 	 M76.688,37.546v1.712c0,17.119-12.839,36.52-36.52,36.52c-7.418,0-13.98-1.997-19.687-5.706c1.141,0.285,1.997,0.285,3.138,0.285 	c5.992,0,11.698-1.997,15.978-5.421c-5.706,0-10.271-3.709-11.983-8.845c0.571,0.285,1.427,0.285,2.283,0.285 	c1.141,0,2.282-0.285,3.424-0.571c-5.992-1.141-10.271-6.277-10.271-12.554v-0.285c1.712,1.141,3.709,1.712,5.706,1.712 	c-3.424-2.283-5.706-5.992-5.706-10.557c0-2.568,0.571-4.565,1.712-6.562c6.562,7.703,15.978,12.839,26.534,13.41 	c-0.285-0.856-0.285-1.712-0.285-2.853c0-7.133,5.706-12.839,12.839-12.839c3.709,0,7.133,1.427,9.415,3.994 	c3.138-0.571,5.706-1.712,8.274-3.138c-1.141,3.138-3.138,5.421-5.706,7.133c2.568-0.285,5.136-0.856,7.418-1.997 	C81.539,33.837,79.541,36.119,76.688,37.546z"/></svg></a><!-- <a href="https://GitHub.com/add830830"><svg GitHub width="2.5em" height="2.5em" viewBox="0 0 100 97.531" class="bi bi-heart-fill" fill="white"><path d="M49.997,0C22.388,0,0,22.386,0,50.003c0,22.089,14.325,40.829,34.196,47.442 		c2.5,0.459,3.413-1.085,3.413-2.41c0-1.187-0.043-4.331-0.068-8.504c-13.908,3.022-16.843-6.702-16.843-6.702 		c-2.274-5.776-5.551-7.314-5.551-7.314c-4.54-3.102,0.343-3.039,0.343-3.039c5.018,0.354,7.659,5.153,7.659,5.153 		c4.46,7.641,11.702,5.434,14.551,4.155c0.454-3.231,1.746-5.434,3.174-6.684c-11.103-1.262-22.775-5.551-22.775-24.712 		c0-5.458,1.948-9.922,5.147-13.417c-0.514-1.265-2.23-6.349,0.49-13.232c0,0,4.198-1.344,13.75,5.126 		c3.988-1.109,8.265-1.664,12.518-1.683c4.246,0.019,8.524,0.574,12.518,1.683c9.546-6.47,13.736-5.126,13.736-5.126 		c2.728,6.884,1.012,11.967,0.498,13.232c3.205,3.495,5.139,7.958,5.139,13.417c0,19.208-11.69,23.435-22.829,24.673 		c1.795,1.544,3.395,4.595,3.395,9.259c0,6.684-0.061,12.077-0.061,13.716c0,1.337,0.901,2.893,3.438,2.404 		C85.687,90.814,100,72.086,100,50.003C100,22.386,77.611,0,49.997,0z"/></svg></a> --> <a href="https://api.whatsapp.com/send?phone=918308308795&text=Hello,%20Friend"><svg WhatsApp width="2.5em" height="2.5em" viewBox="0 0 98.624 98.624" class="bi bi-heart-fill" fill="white"><path d="M51.32,20.882c-13.74,0-24.914,11.173-24.919,24.907c-0.002,4.707,1.315,9.29,3.808,13.256l0.592,0.942l-2.516,9.192 			l9.427-2.473l0.91,0.54c3.824,2.27,8.208,3.47,12.678,3.472h0.01c13.729,0,24.903-11.174,24.909-24.909 			c0.003-6.656-2.586-12.914-7.289-17.622C64.227,23.478,57.973,20.884,51.32,20.882z M65.972,56.498 			c-0.624,1.749-3.616,3.346-5.054,3.56c-1.29,0.193-2.923,0.273-4.716-0.297c-1.087-0.345-2.482-0.806-4.269-1.577 			C44.42,54.941,39.514,47.377,39.14,46.878c-0.374-0.5-3.058-4.06-3.058-7.746c0-3.686,1.934-5.497,2.621-6.247 			c0.686-0.75,1.498-0.937,1.997-0.937s0.999,0.005,1.435,0.026c0.46,0.023,1.077-0.174,1.685,1.285 			c0.624,1.5,2.122,5.185,2.309,5.56c0.187,0.375,0.312,0.812,0.062,1.312c-0.25,0.499-0.374,0.812-0.749,1.249 			s-0.786,0.976-1.123,1.312c-0.375,0.373-0.765,0.779-0.328,1.528c0.437,0.75,1.94,3.202,4.166,5.187 			c2.86,2.551,5.273,3.342,6.022,3.717c0.749,0.375,1.186,0.312,1.622-0.187c0.437-0.5,1.872-2.187,2.371-2.936 			c0.499-0.749,0.998-0.625,1.685-0.375c0.686,0.25,4.368,2.061,5.117,2.436c0.749,0.375,1.248,0.562,1.435,0.875 			C66.596,53.249,66.596,54.749,65.972,56.498z"/><path d="M49.312,0C22.078,0,0,22.078,0,49.312s22.078,49.312,49.312,49.312s49.312-22.078,49.312-49.312S76.546,0,49.312,0z 			 M51.31,75.779C51.309,75.779,51.311,75.779,51.31,75.779h-0.012c-5.016-0.002-9.944-1.26-14.321-3.648L21.09,76.299l4.252-15.53 			c-2.623-4.545-4.003-9.701-4-14.982C21.347,29.263,34.792,15.82,51.31,15.82c8.017,0.003,15.542,3.124,21.2,8.789 			c5.658,5.664,8.773,13.194,8.769,21.202C81.272,62.335,67.827,75.779,51.31,75.779z"/></svg></a> <a href="mailto:anujdakhore@gmail.com?subject=Hello&body=Hi%20Friend"><svg EMail width="2.5em" height="2.5em" viewBox="0 0 98.624 98.624" class="bi bi-heart-fill" fill="white"><path d="M49.312,0C22.078,0,0,22.078,0,49.312s22.078,49.312,49.312,49.312s49.312-22.078,49.312-49.312 	C98.624,22.078,76.546,0,49.312,0z M78.811,28.881c0.022,0,0.041,0.012,0.063,0.013L51.357,56.411 	c-0.917,0.917-2.541,0.919-3.458-0.002L20.371,28.881H78.811z M18.452,30.722c0-0.015,0.008-0.027,0.008-0.041l18.705,18.705 	L18.452,68.099L18.452,30.722L18.452,30.722z M20.293,70.257c-0.085,0-0.158-0.037-0.24-0.048L39.02,51.242l7.023,7.023 	c0.955,0.955,2.228,1.48,3.585,1.48c1.358,0,2.629-0.527,3.584-1.48l6.796-6.796l18.788,18.788L20.293,70.257L20.293,70.257z 	 M80.652,68.402L61.864,49.614l18.788-18.787V68.402z"/></svg></a>
</p>
<p align="center">© ${UI.copyright_year} - <a href=" ${UI.company_link}" target="_blank"> ${UI.company_name}</a>    ® All Rights Reserved.</p>
</div>
</footer>
  `;
	$('body').html(html);
}

const Os = {
	isWindows: navigator.platform.toUpperCase().indexOf('WIN') > -1, // .includes
	isMac: navigator.platform.toUpperCase().indexOf('MAC') > -1,
	isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
	isIos: /(iPhone|iPod|iPad)/i.test(navigator.platform),
	isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

function getDocumentHeight() {
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
	);
}

function render(path) {
	if (path.indexOf("?") > 0) {
		path = path.substr(0, path.indexOf("?"));
	}
	title(path);
	nav(path);
	// .../0: This
	var reg = /\/\d+:$/g;
	if (window.MODEL.is_search_page) {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		render_search_result_list()
	} else if (path.match(reg) || path.substr(-1) == '/') {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		list(path);
	} else {
		file(path);
	}
}


// Render title
function title(path) {
	path = decodeURI(path);
	var cur = window.current_drive_order || 0;
	var drive_name = window.drive_names[cur];
	path = path.replace(`/${cur}:`, '');
	// $('title').html(document.siteName + ' - ' + path);
	var model = window.MODEL;
	if (model.is_search_page)
		$('title').html(`${drive_name} - Search results for ${model.q} `);
	else
		$('title').html(`${drive_name} - ${path}`);
}

// Render the navigation bar
function nav(path) {
	var model = window.MODEL;
	var html = "";
	var cur = window.current_drive_order || 0;
	html += `<nav class="navbar navbar-expand-lg ${UI.dark_mode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}">
  <a class="navbar-brand" href="/${cur}:/">${UI.logo_image ? '<img border="0" alt="'+UI.company_name+'" src="'+UI.logo_link_name+'" height="30px">' : UI.logo_link_name}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/${cur}:/">Home</a>
      </li>`;
	var names = window.drive_names;
	var drive_name = window.drive_names[cur];
	/*html += `<button class="mdui-btn mdui-btn-raised" mdui-menu="{target: '#drive-names'}"><i class="mdui-icon mdui-icon-left material-icons">share</i> ${names[cur]}</button>`;
	html += `<ul class="mdui-menu" id="drive-names" style="transform-origin: 0px 0px; position: fixed;">`;
	names.forEach((name, idx) => {
	    html += `<li class="mdui-menu-item ${(idx === cur) ? 'mdui-list-item-active' : ''} "><a href="/${idx}:/" class="mdui-ripple">${name}</a></li>`;
	});
	html += `</ul>`;*/

	// Dropdown to select different drive roots.
	html += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${drive_name}</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">`;
	names.forEach((name, idx) => {
		html += `<a class="dropdown-item"  href="/${idx}:/">${name}</a>`;
	});
	html += `</div></li>`;

	html += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Current Path</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item"  href="/${cur}:/ ">> Home</a>`;

	if (!model.is_search_page) {
		var arr = path.trim('/').split('/');
		var p = '/';
		if (arr.length > 1) {
			arr.shift();
			for (i in arr) {
				var n = arr[i];
				n = decodeURI(n);
				p += n + '/';
				if (n == '') {
					break;
				}
				html += `<a class="dropdown-item"  href="/${cur}:${p}">> ${n}</a>`;
			}
		}
	}

	html += `</div></li><li class="nav-item">
    <a class="nav-link" href="${UI.contact_link}" target="_blank">Contact</a>
  </li>`;

	var search_text = model.is_search_page ? (model.q || '') : '';
	const isMobile = Os.isMobile;
	var search_bar = `
</ul>
<form class="form-inline my-2 my-lg-0" method="get" action="/${cur}:search">
<input class="form-control mr-sm-2" name="q" type="search" placeholder="Search" aria-label="Search" value="${search_text}" required>
<button class="btn ${UI.dark_mode ? 'btn-secondary' : 'btn-outline-success'} my-2 my-sm-0" onclick="if($('#search_bar').hasClass('mdui-textfield-expanded') && $('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Search</button>
</form>
</div>
</nav>
`;

	// Personal or team
	if (model.root_type < 2) {
		// Show search box
		html += search_bar;
	}

	$('#nav').html(html);
	mdui.mutation();
	mdui.updateTextFields();
}

/**
 * Initiate POST request for listing
 * @param path Path
 * @param params Form params
 * @param resultCallback Success Result Callback
 * @param authErrorCallback Pass Error Callback
 */
function requestListPath(path, params, resultCallback, authErrorCallback) {
	var p = {
		password: params['password'] || null,
		page_token: params['page_token'] || null,
		page_index: params['page_index'] || 0
	};
	$.post(path, p, function (data, status) {
		var res = jQuery.parseJSON(data);
		if (res && res.error && res.error.code == '401') {
			// Password verification failed
			if (authErrorCallback) authErrorCallback(path)
		} else if (res && res.data) {
			if (resultCallback) resultCallback(res, path, p)
		}
	})
}

/**
 * Search POST request
 * @param params Form params
 * @param resultCallback Success callback
 */
function requestSearch(params, resultCallback) {
	var p = {
		q: params['q'] || null,
		page_token: params['page_token'] || null,
		page_index: params['page_index'] || 0
	};
	$.post(`/${window.current_drive_order}:search`, p, function (data, status) {
		var res = jQuery.parseJSON(data);
		if (res && res.data) {
			if (resultCallback) resultCallback(res, p)
		}
	})
}

// Render file list
function list(path) {
	var content = `
  <div class="container"><br>
  <div class="card">
  <h5 class="card-header" id="folderne"><input type="text" id="folderne" class="form-control" placeholder="Current Path: Homepage" value="" readonly><script>document.getElementById("folderne").innerHTML='Current Folder: '+decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')-1))).replace('/','').replace('/','');</script>
  </h5>
  <div id="list" class="list-group">
  </div>
  </div>
  <div class="card">
  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
  </div>
  </div>
  `;
	$('#content').html(content);

	var password = localStorage.getItem('password' + path);
	$('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>`);
	$('#readme_md').hide().html('');
	$('#head_md').hide().html('');

	/**
	 * Callback after the column list request successfully returns data
	 * The result returned by @param res (object)
	 * @param path the requested path
	 * @param prevReqParams parameters used in request
	 */
	function successResultCallback(res, path, prevReqParams) {

		// Temporarily store nextPageToken and currentPageIndex in the list element
		$('#list')
			.data('nextPageToken', res['nextPageToken'])
			.data('curPageIndex', res['curPageIndex']);

		// Remove loading spinner
		$('#spinner').remove();

		if (res['nextPageToken'] === null) {
			// If it is the last page, unbind the scroll event, reset scroll_status, and append the data
			$(window).off('scroll');
			window.scroll_status.event_bound = false;
			window.scroll_status.loading_lock = false;
			append_files_to_list(path, res['data']['files']);
		} else {
			// If it is not the last page, append data and bind the scroll event (if not already bound), update scroll_status
			append_files_to_list(path, res['data']['files']);
			if (window.scroll_status.event_bound !== true) {
				// Bind event, if not yet bound
				$(window).on('scroll', function () {
					var scrollTop = $(this).scrollTop();
					var scrollHeight = getDocumentHeight();
					var windowHeight = $(this).height();
					// Roll to the bottom
					if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
						/*
						    When the event of scrolling to the bottom is triggered, if it is already loading at this time, the event is ignored;
						    Otherwise, go to loading and occupy the loading lock, indicating that loading is in progress
						 */
						if (window.scroll_status.loading_lock === true) {
							return;
						}
						window.scroll_status.loading_lock = true;

						// Show a loading spinner
						$(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>`)
							.insertBefore('#readme_md');
						mdui.updateSpinners();
						// mdui.mutation();

						let $list = $('#list');
						requestListPath(path, {
								password: prevReqParams['password'],
								page_token: $list.data('nextPageToken'),
								// Request next page
								page_index: $list.data('curPageIndex') + 1
							},
							successResultCallback,
							// The password is the same as before. No authError
							null
						)
					}
				});
				window.scroll_status.event_bound = true
			}
		}

		// After loading successfully and rendering new data successfully, release the loading lock so that you can continue to process the "scroll to bottom" event
		if (window.scroll_status.loading_lock === true) {
			window.scroll_status.loading_lock = false
		}
	}

	// Start requesting data from page 1
	requestListPath(path, {
			password: password
		},
		successResultCallback,
		function (path) {
			$('#spinner').remove();
			var pass = prompt("Directory encryption, please enter the password", "");
			localStorage.setItem('password' + path, pass);
			if (pass != null && pass != "") {
				list(path);
			} else {
				history.go(-1);
			}
		});
}

/**
 * Append the data of the requested new page to the list
 * @param path
 * @param files request result
 */
function append_files_to_list(path, files) {
	var $list = $('#list');
	// Is it the last page of data?
	var is_lastpage_loaded = null === $list.data('nextPageToken');
	var is_firstpage = '0' == $list.data('curPageIndex');

	html = "";
	let targetFiles = [];
	for (i in files) {
		var item = files[i];
		var p = path + item.name + '/';
		if (item['size'] == undefined) {
			item['size'] = "";
		}

		item['modifiedTime'] = utc2beijing(item['modifiedTime']);
		item['size'] = formatFileSize(item['size']);
		if (item['mimeType'] == 'application/vnd.google-apps.folder') {
			html += `<a href="${p}" class="list-group-item ${UI.dark_mode ? 'list-group-item-action' : 'btn-outline-secondary'}"><svg Folder width="1.5em" height="1.5em" viewBox="0 0 300 300" fill="white"><path d="M207.597,115.365h-71.22l-18.759-17.029H85.649c-2.446,0-4.435,1.989-4.435,4.432v108.899c0,2.443,1.989,4.432,4.435,4.432h3.369l17.688-91.03h105.32v-5.27C212.027,117.357,210.038,115.365,207.597,115.365z"/><path d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003S232.835,0,149.996,0zM227.241,212.721c-0.542,10.333-8.948,18.601-19.343,18.912c-0.101,0.005-0.197,0.031-0.301,0.031l-9.231,0.005l-112.72-0.005c-11.023,0-19.991-8.969-19.991-19.994V102.768c0-11.025,8.969-19.994,19.997-19.994h37.975l18.759,17.029h65.211c11.023,0,19.991,8.969,19.991,19.997v5.27l17.904,0.003L227.241,212.721z"/></svg>&ensp;${item.name}<span class="badge"><br>${item['size']}</span><span class="badge">${item['modifiedTime']}</span></a>`;
		} else {
			var p = path + item.name;
			const filepath = path + item.name;
			var c = "file";
			// README is displayed after the last page is loaded, otherwise it will affect the scroll event
			if (is_lastpage_loaded && item.name == "README.md") {
				get_file(p, item, function (data) {
					markdown("#readme_md", data);
          $("img").addClass("img-fluid")
				});
			}
			if (item.name == "HEAD.md") {
				get_file(p, item, function (data) {
					markdown("#head_md", data);
          $("img").addClass("img-fluid")
				});
			}
			var ext = p.split('.').pop().toLowerCase();
			if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${ext}|`) >= 0) {
				targetFiles.push(filepath);
				p += "?a=view";
				c += " view";
			}
			html += `<a href="${p}" class="list-group-item ${UI.dark_mode ? 'list-group-item-action' : 'btn-outline-secondary'}"><svg FILE width="1.5em" height="1.5em" viewBox="0 0 299.998 299.998" fill="white"><path d="M149.995,0.001C67.156,0.001,0,67.16,0,149.999s67.156,149.997,149.995,149.997s150.003-67.161,150.003-149.997C299.997,67.157,232.834,0.001,149.995,0.001zM217.205,217.204c0,10.066-8.159,18.225-18.223,18.225h-97.967c-10.068,0-18.225-8.159-18.225-18.225V82.79c0-10.066,8.159-18.225,18.225-18.225h76.892v36.45h39.298V217.204zM185.688,93.232V64.563l31.517,28.669H185.688z"/></svg>&ensp;${item.name}<span class="badge"><br>${item['size']}</span><span class="badge">${item['modifiedTime']}</span></a>`;
		}
	}

	/*let targetObj = {};
	targetFiles.forEach((myFilepath, myIndex) => {
	    if (!targetObj[myFilepath]) {
	        targetObj[myFilepath] = {
	            filepath: myFilepath,
	            prev: myIndex === 0 ? null : targetFiles[myIndex - 1],
	            next: myIndex === targetFiles.length - 1 ? null : targetFiles[myIndex + 1],
	        }
	    }
	})
	// console.log(targetObj)
	if (Object.keys(targetObj).length) {
	    localStorage.setItem(path, JSON.stringify(targetObj));
	    // console.log(path)
	}*/

	if (targetFiles.length > 0) {
		let old = localStorage.getItem(path);
		let new_children = targetFiles;
		// Reset on page 1; otherwise append
		if (!is_firstpage && old) {
			let old_children;
			try {
				old_children = JSON.parse(old);
				if (!Array.isArray(old_children)) {
					old_children = []
				}
			} catch (e) {
				old_children = [];
			}
			new_children = old_children.concat(targetFiles)
		}

		localStorage.setItem(path, JSON.stringify(new_children))
	}

	// When it is page 1, remove the horizontal loading bar
	$list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
	// When it is the last page, count and display the total number of items
	if (is_lastpage_loaded) {
		$('#count').removeClass('mdui-hidden').find('.number').text($list.find('li.mdui-list-item').length);
	}
}

/**
 * Render the search results list. There is a lot of repetitive code, but there are different logics in it.
 */
function render_search_result_list() {
	var content = `
  <div class="container"><br>
  <div class="card">
  <h5 class="card-header">Search Results</h5>
  <div id="list" class="list-group">
  </div>
  </div>
  <div class="card">
  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
  </div>
  </div>
  `;
	$('#content').html(content);

	$('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>`);
	$('#readme_md').hide().html('');
	$('#head_md').hide().html('');

	/**
	 * Callback after successful search request returns data
	 * The result returned by @param res (object)
	 * @param path the requested path
	 * @param prevReqParams parameters used in request
	 */
	function searchSuccessCallback(res, prevReqParams) {

		// Temporarily store nextPageToken and currentPageIndex in the list element
		$('#list')
			.data('nextPageToken', res['nextPageToken'])
			.data('curPageIndex', res['curPageIndex']);

		// Remove loading spinner
		$('#spinner').remove();

		if (res['nextPageToken'] === null) {
			// If it is the last page, unbind the scroll event, reset scroll_status, and append the data
			$(window).off('scroll');
			window.scroll_status.event_bound = false;
			window.scroll_status.loading_lock = false;
			append_search_result_to_list(res['data']['files']);
		} else {
			// If it is not the last page, append data and bind the scroll event (if not already bound), update scroll_status
			append_search_result_to_list(res['data']['files']);
			if (window.scroll_status.event_bound !== true) {
				// Bind event, if not yet bound
				$(window).on('scroll', function () {
					var scrollTop = $(this).scrollTop();
					var scrollHeight = getDocumentHeight();
					var windowHeight = $(this).height();
					// Roll to the bottom
					if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
						/*
     When the event of scrolling to the bottom is triggered, if it is already loading at this time, the event is ignored;
                 Otherwise, go to loading and occupy the loading lock, indicating that loading is in progress
             */
						if (window.scroll_status.loading_lock === true) {
							return;
						}
						window.scroll_status.loading_lock = true;

						// Show a loading spinner
						$(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>`)
							.insertBefore('#readme_md');
						mdui.updateSpinners();
						// mdui.mutation();

						let $list = $('#list');
						requestSearch({
								q: window.MODEL.q,
								page_token: $list.data('nextPageToken'),
								// Request next page
								page_index: $list.data('curPageIndex') + 1
							},
							searchSuccessCallback
						)
					}
				});
				window.scroll_status.event_bound = true
			}
		}

		// After loading successfully and rendering new data successfully, release the loading lock so that you can continue to process the "scroll to bottom" event
		if (window.scroll_status.loading_lock === true) {
			window.scroll_status.loading_lock = false
		}
	}

	// Start requesting data from page 1
	requestSearch({
		q: window.MODEL.q
	}, searchSuccessCallback);
}

/**
 * Append a new page of search results
 * @param files
 */
function append_search_result_to_list(files) {
	var cur = window.current_drive_order || 0;
	var $list = $('#list');
	// Is it the last page of data?
	var is_lastpage_loaded = null === $list.data('nextPageToken');
	// var is_firstpage = '0' == $list.data('curPageIndex');

	html = "";

	for (i in files) {
		var item = files[i];
		var p = '/' + cur + ':/' + item.name + '/';
		if (item['size'] == undefined) {
			item['size'] = "";
		}

		item['modifiedTime'] = utc2beijing(item['modifiedTime']);
		item['size'] = formatFileSize(item['size']);
		if (item['mimeType'] == 'application/vnd.google-apps.folder') {
			html += `<a onclick="onSearchResultItemClick(this)" id="${item['id']}" class="list-group-item ${UI.dark_mode ? 'list-group-item-action' : 'btn-outline-secondary'}"><svg FOLDER width="1.5em" height="1.5em" viewBox="0 0 300 300" fill="white"><path d="M207.597,115.365h-71.22l-18.759-17.029H85.649c-2.446,0-4.435,1.989-4.435,4.432v108.899c0,2.443,1.989,4.432,4.435,4.432h3.369l17.688-91.03h105.32v-5.27C212.027,117.357,210.038,115.365,207.597,115.365z"/><path d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003S232.835,0,149.996,0zM227.241,212.721c-0.542,10.333-8.948,18.601-19.343,18.912c-0.101,0.005-0.197,0.031-0.301,0.031l-9.231,0.005l-112.72-0.005c-11.023,0-19.991-8.969-19.991-19.994V102.768c0-11.025,8.969-19.994,19.997-19.994h37.975l18.759,17.029h65.211c11.023,0,19.991,8.969,19.991,19.997v5.27l17.904,0.003L227.241,212.721z"/></svg>&ensp;${item.name}<span class="badge"><br>${item['size']}</span><span class="badge">${item['modifiedTime']}</span></a>`;
		} else {
			var p = '/' + cur + ':/' + item.name;
			var c = "file";
			var ext = item.name.split('.').pop().toLowerCase();
			if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
				p += "?a=view";
				c += " view";
			}
			html += `<a onclick="onSearchResultItemClick(this)" id="${item['id']}" gd-type="${item.mimeType}" class="list-group-item ${UI.dark_mode ? 'list-group-item-action' : 'btn-outline-secondary'}"><svg FILE width="1.5em" height="1.5em" viewBox="0 0 299.998 299.998" fill="white"><path d="M149.995,0.001C67.156,0.001,0,67.16,0,149.999s67.156,149.997,149.995,149.997s150.003-67.161,150.003-149.997C299.997,67.157,232.834,0.001,149.995,0.001zM217.205,217.204c0,10.066-8.159,18.225-18.223,18.225h-97.967c-10.068,0-18.225-8.159-18.225-18.225V82.79c0-10.066,8.159-18.225,18.225-18.225h76.892v36.45h39.298V217.204zM185.688,93.232V64.563l31.517,28.669H185.688z"/></svg>&ensp;${item.name}<span class="badge"><br>${item['size']}</span><span class="badge">${item['modifiedTime']}</span></a>`;
		}
	}

	// When it is page 1, remove the horizontal loading bar
	$list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
	// When it is the last page, count and display the total number of items
	if (is_lastpage_loaded) {
		$('#count').removeClass('mdui-hidden').find('.number').text($list.find('li.mdui-list-item').length);
	}
}

/**
 * Search result item click event
 * @param a_ele Clicked element
 */
function onSearchResultItemClick(a_ele) {
	var me = $(a_ele);
	var can_preview = me.hasClass('view');
	var cur = window.current_drive_order;
	var dialog = mdui.dialog({
		title: '',
		content: '<div class="mdui-text-center mdui-typo-title mdui-m-b-1"><svg width="1.5em" height="1.5em" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"> <circle style="fill:#A7D9FF;" cx="256" cy="256" r="256"/><path style="fill:#BEE6FF;" d="M128,304c0,85.065,41.523,160.396,105.371,206.948C240.833,511.602,248.368,512,256,512c141.385,0,256-114.615,256-256c0-85.065-41.523-160.396-105.371-206.948C399.167,48.398,391.632,48,384,48 	C242.615,48,128,162.615,128,304z"/><path style="fill:#D2EEFF;" d="M144,360c0,52.805,15.999,101.867,43.397,142.627C209.239,508.691,232.227,512,256,512c141.385,0,256-114.615,256-256c0-52.805-15.999-101.867-43.397-142.627C446.761,107.31,423.773,104,400,104C258.615,104,144,218.615,144,360z"/> <path style="fill:#AAC864;" d="M274.333,170.667c0,0-7.981,2.685-10.833,0.583c-4.75-3.5-11.75-5.125-14.75-1.125c-4.25,5.667-11.75,9.542-11.75,9.542L241,218l32.333-0.333L274.333,170.667z"/> <path style="fill:#88BE64;" d="M293.333,165.333c0,0-17.708-3.083-22.667,0.333c-5.244,3.613-4.297,9.075-10.333,12.667c-6.583,3.917-5.792,20.042-1.458,27.042c4.333,7-0.875,14.458-0.875,14.458L281,220L293.333,165.333z"/> <path style="fill:#AAC864;" d="M0,256c0,141.385,114.615,256,256,256s256-114.615,256-256c0-13.61-1.085-26.964-3.131-40H3.131C1.085,229.036,0,242.39,0,256z"/> <path style="fill:#5F9D5F;" d="M307,224c0,0-30.567-2-42.617-8c0,0-5.383-22.667-2.05-28.667s5.422-4.906,8-8c3.333-4,4.328-10.213,8.333-13.333c3.208-2.5,11.667-1.667,16-9.333c4.333-7.667,16-3.667,16-3.667L307,224z"/> <path style="fill:#789BB4;" d="M432.667,324.667c0-38-165.667-43.667-165.667-58.417c0-9.583,47.333-12.917,47.333-29.917c0-12.085-40.209-10.533-49.95-20.333l-17.883-0.25c-15.445,6.642,17.5,14.522,17.5,17.583c0,9.917-108,7.968-108,36C156,300,264,297,264,318c0,30.831-162.889,13.403-184.31,123.509C125.603,485.159,187.648,512,256,512c52.711,0,101.689-15.946,142.407-43.256C352,444,332,417.95,332,399.333C332,372,432.667,356.667,432.667,324.667z"/> <path style="fill:#88BE64;" d="M234.667,218.333l15.592-2.522c0,0,2.991-27.062-2.925-34.812c-3.081-4.036-7.333-15.333-10.333-17.333S225.333,168,225.333,168L234.667,218.333z"/> <path style="fill:#5F9D5F;" d="M216.667,235.333c0,0,19.333-2,20-10s-8.298-65.636-11-68c-5.333-4.667-6.252,7.573-13.667-5.333c-9-15.667-23.333-12.667-23.333-12.667L216.667,235.333z"/><path style="fill:#D6E1E8;" d="M332,399.333c0-27.333,100.667-42.667,100.667-74.667c0-34.979-140.27-42.565-162.59-55.054C280.689,279.79,417.713,299.186,421.5,319.5c5.5,29.5-61.846,31.227-91.5,63c-28.398,30.427,19.568,76.102,47.577,98.661c7.128-3.858,14.129-7.922,20.83-12.417C352,444,332,417.95,332,399.333z"/><path style="fill:#D6E1E8;" d="M269.667,313.667c-13.333-15.333-80.333-16.333-103-30.333c-0.512-0.316-1.105-0.447-1.692-0.592C190.848,299.674,264,300.711,264,318c0,30.831-162.889,13.403-184.31,123.509c5.792,5.506,11.842,10.741,18.127,15.692C97.399,426.868,122.333,374.667,175,360C253.227,338.215,283,329,269.667,313.667z"/> </g> <path style="fill:#E6C35A;" d="M338.076,304.359c-8.318-2.912-16.679-5.433-25.012-7.795c-16.666-4.707-33.196-8.716-49.1-12.836 	c-7.945-2.072-15.751-4.143-23.237-6.539c-3.73-1.21-7.409-2.492-10.79-4.109c-1.66-0.807-3.337-1.743-4.39-2.873 	c-1.063-1.141-0.664-1.728,0.805-2.856c2.863-1.783,6.646-2.769,10.03-4.027c3.47-1.15,6.886-2.284,10.246-3.397 	c6.757-2.164,13.286-4.253,19.553-6.26c6.268-2.038,12.276-4.033,17.811-6.558c2.741-1.309,5.445-2.628,7.66-4.831 	c1.066-1.039,2.081-2.798,1.616-4.613c-0.463-1.741-1.676-2.813-2.778-3.677c-2.29-1.707-4.726-2.754-7.072-3.711 	c-1.159-0.527-16.704-5.087-20.264-6.465c-3.505-1.438-6.561-3.004-8.728-4.808c-1.139-0.948-1.899-2.22-2.284-3.192h-1.694 	c0.203,0.769,0.587,1.728,1.089,2.481c1.803,2.921,5.025,4.797,8.542,6.531c3.55,1.688,7.683,3.276,12.14,4.634 	c0.561,0.198,11.733,3.919,14.011,5.184c2.167,1.198,4.71,3.204,3.419,5.152c-1.303,2.022-4.089,3.466-6.711,4.73 	c-5.436,2.496-11.528,4.439-17.872,6.412c-12.733,3.91-26.738,7.374-41.278,12.492c-1.836,0.731-3.724,1.457-5.425,3.123 	c-0.827,0.779-1.584,2.434-1.056,3.849c0.459,1.345,1.322,2.167,2.132,2.884c3.375,2.682,7.123,4.131,10.878,5.684 	c7.552,2.955,15.409,5.357,23.392,7.792c15.978,4.813,32.545,9.473,49.156,14.836c8.306,2.678,16.618,5.522,24.841,8.674 	c3.992,1.509,8.077,3.352,10.529,6.028c2.487,2.522,0.945,5.686-2.068,8.68c-5.998,5.729-13.987,9.985-21.613,14.208 	c-7.747,4.168-15.627,8.111-23.422,12.104c-15.589,7.984-30.948,16.068-44.919,25.625c-6.96,4.801-13.61,9.932-19.437,15.878 	c-5.945,5.946-10.583,13.126-13.36,20.785c-5.656,15.535-3.321,31.534,0.878,44.482c4.243,13.162,10.38,24.174,16.252,33.509 	c5.092,7.919,10.04,14.578,14.512,20.162c3.59,0.151,7.19,0.263,10.817,0.265c-0.744-0.855-1.471-1.685-2.258-2.613 	c-4.957-5.832-10.69-13.167-16.56-22.021c-5.77-8.884-11.763-19.349-15.878-31.555c-4.103-12.059-6.266-26.396-1.501-40.005 	c4.464-13.751,16.616-24.532,29.95-33.984c13.427-9.468,28.501-17.693,43.931-25.864c7.721-4.093,15.56-8.152,23.347-12.482 	c7.723-4.461,15.658-8.675,22.496-15.341c1.645-1.732,3.295-3.703,4.132-6.478c0.958-2.822-0.17-6.309-2.033-8.2 	c-3.702-3.834-8.138-5.463-12.343-7.065c-8.355-3.066-16.776-5.814-25.161-8.387c-3.265-1.003-6.483-1.886-9.736-2.84 	c5.906,1.629,11.813,3.241,17.757,5.008c8.247,2.461,16.523,5.083,24.661,8.058c4.013,1.467,8.07,3.065,10.496,5.757 	c2.538,2.528,1.583,5.893-0.934,9.125c-5.101,6.298-12.637,11.146-19.824,15.797c-7.32,4.616-14.87,8.895-22.379,13.124 	c-15.032,8.45-30.021,16.567-43.989,25.575c-6.957,4.514-13.731,9.291-19.793,14.687c-6.213,5.615-11.281,12.381-14.201,20.026 	c-5.924,15.59-2.024,31.626,3.315,43.889c5.583,12.484,12.727,22.669,19.475,31.2c6.789,8.525,13.282,15.424,18.783,20.928 	c1.104,1.105,2.137,2.113,3.158,3.107c3.731-0.213,7.43-0.528,11.117-0.899c-2.463-2.217-5.311-4.839-8.555-8.002 	c-5.423-5.273-11.819-11.884-18.468-19.997c-6.612-8.107-13.553-17.772-18.891-29.276c-5.141-11.371-8.558-25.407-3.712-38.628 	c4.596-13.33,17.616-22.996,31.049-32.051c13.558-9.023,28.364-17.328,43.312-26.011c7.474-4.352,15.014-8.766,22.409-13.578 	c7.306-4.937,14.854-9.734,20.786-17.197c1.419-1.907,2.716-4.164,3.142-6.942c0.45-2.836-0.773-5.904-2.604-7.755 	C346.73,307.305,342.172,305.864,338.076,304.359z M221.065,271.358c-1.426-1.264-1.951-2.128-0.918-3.146 	c1.049-1.093,2.805-1.921,4.492-2.587c0.024-0.009,0.048-0.016,0.072-0.025c-0.773,0.563-1.585,1.228-2.048,2.45 	c-0.513,1.504,0.281,3.01,1.019,3.797c1.56,1.684,3.343,2.609,5.119,3.531c0.789,0.391,1.608,0.697,2.41,1.05 	C227.583,275.012,223.851,273.531,221.065,271.358z"/> <path style="fill:#74B75A;" d="M510.053,224.905C444.248,223.183,323,216.9,323,222.333c0,32.667-36,35.667-36,42 	c0,10.333,143.095,20.877,163,55c14,24-75.333,60.667-81.333,77c-7.143,19.445,17.538,42.627,46.827,59.838 	C474.286,409.265,512,337.058,512,256C512,245.466,511.289,235.105,510.053,224.905z"/> <path style="fill:#5F8C6E;" d="M508.006,211.165l-118.672-23.832L328,208c0,0,3.333,33.333-16,48c-17.422,13.217,128,20.667,152,56 	s-28.667,54-54,73.333C391.122,399.74,400,424,435.288,438.67C482.612,392.216,512,327.553,512,256 	C512,240.695,510.581,225.731,508.006,211.165z"/> <path style="fill:#74B75A;" d="M242.333,316.333C242.333,308,167,296.667,160,280L1.469,283.333 	c5.634,53.068,27.512,101.255,60.527,139.592c13.026-29.465,47.992-67.85,97.337-79.258 	C221.333,329.333,242.333,323,242.333,316.333z"/> <path style="fill:#5F8C6E;" d="M175.5,298c-30.87-10.645-43.082-32.341-55-40.5c-23.214-15.893-81.576-52.36-110.977-70.634 	C3.365,208.866,0,232.034,0,256c0,50.974,14.958,98.425,40.638,138.323c36.78-37.009,75.833-56.88,136.862-67.823 	C221.698,318.575,204.5,308,175.5,298z"/> <rect x="148.22" y="226.29" style="fill:#5F4648;" width="8.686" height="87.38"/> <path style="fill:#5F8C6E;" d="M185.134,250.462c0,24.993-14.581,37.539-32.567,37.539S120,275.455,120,250.462 	S139.949,128,152.567,128S185.134,225.468,185.134,250.462z"/> <path style="fill:#5F9D5F;" d="M152.567,128c-2.499,0-5.287,3.864-8.149,10.19c10.293,15.589,23.61,92.61,23.61,114.004 	c0,20.901-9.294,32.668-21.635,35.253c2.003,0.347,4.059,0.553,6.174,0.553c17.986,0,32.567-12.545,32.567-37.539 	S165.185,128,152.567,128z"/> <rect x="342.34" y="240.25" style="fill:#5F4648;" width="6.876" height="31.75"/> <path style="fill:#5F8C6E;" d="M371.565,216.949c0,19.786-11.543,29.718-25.782,29.718s-25.782-9.932-25.782-29.718 	S335.793,120,345.782,120S371.565,197.162,371.565,216.949z"/> <path style="fill:#5F9D5F;" d="M345.782,120c-1.978,0-4.185,3.059-6.451,8.067c8.149,12.341,18.691,73.316,18.691,90.253 	c0,16.547-7.358,25.862-17.127,27.909c1.585,0.274,3.213,0.438,4.887,0.438c14.239,0,25.782-9.932,25.782-29.718 	S355.771,120,345.782,120z"/> <rect x="97" y="304.33" style="fill:#5F4648;" width="7.296" height="34"/> <path style="fill:#5FAF50;" d="M128,278.868c0,20.994-12.248,31.533-27.356,31.533s-27.356-10.538-27.356-31.533 	S90.045,176,100.643,176S128,257.873,128,278.868z"/> <path style="fill:#74B75A;" d="M100.644,176c-2.099,0-4.441,3.246-6.845,8.56c8.646,13.095,19.832,77.792,19.832,95.763 	c0,17.557-7.807,27.441-18.173,29.613c1.682,0.291,3.409,0.465,5.186,0.465c15.109,0,27.356-10.538,27.356-31.532 	S111.242,176,100.644,176z"/> <rect x="187.09" y="218.29" style="fill:#5F4648;" width="8.686" height="96.71"/> <path style="fill:#E6AA55;" d="M224,242.461C224,267.455,209.419,280,191.433,280s-32.567-12.545-32.567-37.539 	S178.815,120,191.433,120S224,217.468,224,242.461z"/> <path style="fill:#E6C35A;" d="M191.433,120c-2.499,0-5.287,3.864-8.149,10.19c10.293,15.589,23.61,92.61,23.61,114.004 	c0,20.901-9.294,32.668-21.635,35.253c2.003,0.347,4.059,0.553,6.174,0.553C209.419,280,224,267.455,224,242.461 	S204.05,120,191.433,120z"/> <rect x="319.71" y="231.25" style="fill:#5F4648;" width="7.296" height="40.75"/> <path style="fill:#E6AA55;" d="M296,206.868c0,20.994,12.248,31.533,27.356,31.533s27.356-10.538,27.356-31.533 	S333.955,104,323.357,104S296,185.873,296,206.868z"/> <path style="fill:#E6C35A;" d="M323.356,104c2.099,0,4.441,3.246,6.845,8.56c-8.646,13.095-19.832,77.792-19.832,95.763 	c0,17.557,7.807,27.441,18.173,29.613c-1.682,0.291-3.409,0.465-5.186,0.465c-15.109,0-27.356-10.538-27.356-31.532 	S312.758,104,323.356,104z"/> <rect x="39.794" y="318.33" style="fill:#5F4648;" width="11.12" height="52"/> <path style="fill:#5F9D5F;" d="M3.667,276.751c0,31.991,18.663,48.05,41.686,48.05s41.686-16.058,41.686-48.05 	S61.503,120,45.353,120S3.667,244.759,3.667,276.751z"/> <path style="fill:#5F8C6E;" d="M45.353,120c3.198,0,6.767,4.947,10.431,13.044c-13.175,19.954-30.221,118.541-30.221,145.925 	c0,26.754,11.897,41.815,27.692,45.124c-2.563,0.444-5.195,0.708-7.902,0.708c-23.023,0-41.686-16.058-41.686-48.049 	S29.202,120,45.353,120z"/> <path style="fill:#5F4648;" d="M485.15,328h-12.507v64h0.208c4.443-7.07,8.55-14.367,12.299-21.88L485.15,328L485.15,328z"/> <path style="fill:#5F8C6E;" d="M432,280.344c0,35.99,20.996,54.056,46.896,54.056c8.143,0,15.797-1.792,22.47-5.358 	C508.25,305.889,512,281.388,512,256c0-52.381-15.762-101.066-42.758-141.631C452.048,147.425,432,250.276,432,280.344z"/> <path style="fill:#5F9D5F;" d="M469.242,114.369C452.048,147.426,432,250.277,432,280.344c0,35.99,20.997,54.056,46.897,54.056 	c3.045,0,6.006-0.297,8.89-0.796c-17.77-3.722-31.154-20.667-31.154-50.764c0-25.531,13.169-106.029,26.117-145.647 	C478.626,129.338,474.131,121.715,469.242,114.369z"/> <rect x="122.08" y="250.33" style="fill:#5F4648;" width="9.92" height="85.67"/> <path style="fill:#88BE64;" d="M186.56,185.44c0-25.626-16.786-97.44-59.52-97.44s-59.52,71.814-59.52,97.44 	c0,12.434,6.309,23.7,16.524,32.03c2.035,21.967,20.498,39.17,42.996,39.17s40.962-17.204,42.996-39.17 	C180.251,209.139,186.56,197.874,186.56,185.44z"/> <path style="fill:#AAC864;" d="M127.04,88c-2.82,0-5.52,0.331-8.116,0.923c30.627,8.373,42.836,72.582,42.836,96.517 	c0,12.434-5.258,23.7-13.77,32.03c-1.486,19.257-13.496,34.849-29.067,38.403c2.629,0.5,5.341,0.767,8.116,0.767 	c22.498,0,40.962-17.204,42.996-39.17c10.214-8.33,16.524-19.596,16.524-32.03C186.56,159.814,169.774,88,127.04,88z"/> <rect x="356" y="210.75" style="fill:#5F4648;" width="8" height="69.25"/> <path style="fill:#88BE64;" d="M312,158.581C312,137.915,325.537,80,360,80s48,57.915,48,78.581 	c0,10.027-5.088,19.113-13.325,25.831C393.034,202.126,378.144,216,360,216s-33.034-13.874-34.675-31.589 	C317.088,177.693,312,168.608,312,158.581z"/> <path style="fill:#AAC864;" d="M360,80c2.274,0,4.451,0.267,6.545,0.744C341.846,87.496,332,139.278,332,158.581 	c0,10.027,4.24,19.113,11.104,25.831c1.199,15.53,10.884,28.104,23.441,30.97c-2.12,0.403-4.307,0.618-6.545,0.618 	c-18.144,0-33.034-13.874-34.675-31.589c-8.237-6.718-13.325-15.803-13.325-25.83C312,137.915,325.537,80,360,80z"/> <g> 	<rect x="65.92" y="282.33" style="fill:#5F4648;" width="12.16" height="101.67"/> 	<rect x="419.46" y="293.67" style="fill:#5F4648;" width="13.376" height="114.33"/> </g> <path style="fill:#5FAF50;" d="M476.307,244.59c0-28.749-17.14-119.745-33.913-163.972c-6.926-7.358-14.261-14.323-22.008-20.821 	C401.197,83.343,376,209.733,376,244.59c0,38.49,22.454,57.81,50.153,57.81C453.853,302.4,476.307,283.08,476.307,244.59z"/> <path style="fill:#74B75A;" d="M420.386,59.797C401.197,83.342,376,209.733,376,244.59c0,38.49,22.455,57.81,50.153,57.81 	c3.257,0,6.423-0.318,9.507-0.852c-19.004-3.981-33.317-22.102-33.317-54.29c0-31.701,18.985-142.673,34.542-172.406 	C431.616,69.591,426.095,64.585,420.386,59.797z"/><path style="fill:#5FAF50;" d="M72,80c-0.646,0-1.264,0.074-1.9,0.1c-35.08,37.062-59.24,84.558-67.211,137.394 	c3.458,8.005,9.08,15.236,16.406,21.211C21.789,265.632,44.421,286.72,72,286.72s50.211-21.088,52.706-48.015 	c12.521-10.211,20.254-24.021,20.254-39.262C144.96,168.03,124.383,80,72,80z"/> <path style="fill:#74B75A;" d="M72,80c-0.65,0-1.27,0.082-1.91,0.11c-0.969,1.023-1.965,2.021-2.917,3.06 	c33.753,15.69,47.387,88.319,47.387,116.272c0,15.242-6.445,29.051-16.879,39.262c-1.822,23.606-16.543,42.718-35.63,47.075 	c3.223,0.613,6.547,0.94,9.949,0.94c27.579,0,50.211-21.088,52.706-48.015c12.521-10.211,20.254-24.021,20.254-39.262 	C144.96,168.03,124.383,80,72,80z"/></svg> Getting target path...</div><div class="d-flex justify-content-center"><div class="spinner-border m-5 text-primary" role="status"><span class="sr-only">Loading...</span></div></div>',
		// content: '<div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',
		history: false,
		modal: true,
		closeOnEsc: true
	});
	mdui.updateSpinners();

	// Request a path
	$.post(`/${cur}:id2path`, {
		id: a_ele.id
	}, function (data) {
		if (data) {
			dialog.close();
			var href = `/${cur}:${data}${can_preview ? '?a=view' : ''}`;
			if (href.endsWith("/")) {
				hrefurl = href;
			} else {
				hrefurl = href + '?a=view';
			}
			dialog = mdui.dialog({
				title: '<svg width="1em" height="1em" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"> <circle style="fill:#A7D9FF;" cx="256" cy="256" r="256"/><path style="fill:#BEE6FF;" d="M128,304c0,85.065,41.523,160.396,105.371,206.948C240.833,511.602,248.368,512,256,512c141.385,0,256-114.615,256-256c0-85.065-41.523-160.396-105.371-206.948C399.167,48.398,391.632,48,384,48 	C242.615,48,128,162.615,128,304z"/><path style="fill:#D2EEFF;" d="M144,360c0,52.805,15.999,101.867,43.397,142.627C209.239,508.691,232.227,512,256,512c141.385,0,256-114.615,256-256c0-52.805-15.999-101.867-43.397-142.627C446.761,107.31,423.773,104,400,104C258.615,104,144,218.615,144,360z"/> <path style="fill:#AAC864;" d="M274.333,170.667c0,0-7.981,2.685-10.833,0.583c-4.75-3.5-11.75-5.125-14.75-1.125c-4.25,5.667-11.75,9.542-11.75,9.542L241,218l32.333-0.333L274.333,170.667z"/> <path style="fill:#88BE64;" d="M293.333,165.333c0,0-17.708-3.083-22.667,0.333c-5.244,3.613-4.297,9.075-10.333,12.667c-6.583,3.917-5.792,20.042-1.458,27.042c4.333,7-0.875,14.458-0.875,14.458L281,220L293.333,165.333z"/> <path style="fill:#AAC864;" d="M0,256c0,141.385,114.615,256,256,256s256-114.615,256-256c0-13.61-1.085-26.964-3.131-40H3.131C1.085,229.036,0,242.39,0,256z"/> <path style="fill:#5F9D5F;" d="M307,224c0,0-30.567-2-42.617-8c0,0-5.383-22.667-2.05-28.667s5.422-4.906,8-8c3.333-4,4.328-10.213,8.333-13.333c3.208-2.5,11.667-1.667,16-9.333c4.333-7.667,16-3.667,16-3.667L307,224z"/> <path style="fill:#789BB4;" d="M432.667,324.667c0-38-165.667-43.667-165.667-58.417c0-9.583,47.333-12.917,47.333-29.917c0-12.085-40.209-10.533-49.95-20.333l-17.883-0.25c-15.445,6.642,17.5,14.522,17.5,17.583c0,9.917-108,7.968-108,36C156,300,264,297,264,318c0,30.831-162.889,13.403-184.31,123.509C125.603,485.159,187.648,512,256,512c52.711,0,101.689-15.946,142.407-43.256C352,444,332,417.95,332,399.333C332,372,432.667,356.667,432.667,324.667z"/> <path style="fill:#88BE64;" d="M234.667,218.333l15.592-2.522c0,0,2.991-27.062-2.925-34.812c-3.081-4.036-7.333-15.333-10.333-17.333S225.333,168,225.333,168L234.667,218.333z"/> <path style="fill:#5F9D5F;" d="M216.667,235.333c0,0,19.333-2,20-10s-8.298-65.636-11-68c-5.333-4.667-6.252,7.573-13.667-5.333c-9-15.667-23.333-12.667-23.333-12.667L216.667,235.333z"/><path style="fill:#D6E1E8;" d="M332,399.333c0-27.333,100.667-42.667,100.667-74.667c0-34.979-140.27-42.565-162.59-55.054C280.689,279.79,417.713,299.186,421.5,319.5c5.5,29.5-61.846,31.227-91.5,63c-28.398,30.427,19.568,76.102,47.577,98.661c7.128-3.858,14.129-7.922,20.83-12.417C352,444,332,417.95,332,399.333z"/><path style="fill:#D6E1E8;" d="M269.667,313.667c-13.333-15.333-80.333-16.333-103-30.333c-0.512-0.316-1.105-0.447-1.692-0.592C190.848,299.674,264,300.711,264,318c0,30.831-162.889,13.403-184.31,123.509c5.792,5.506,11.842,10.741,18.127,15.692C97.399,426.868,122.333,374.667,175,360C253.227,338.215,283,329,269.667,313.667z"/> </g> <path style="fill:#E6C35A;" d="M338.076,304.359c-8.318-2.912-16.679-5.433-25.012-7.795c-16.666-4.707-33.196-8.716-49.1-12.836 	c-7.945-2.072-15.751-4.143-23.237-6.539c-3.73-1.21-7.409-2.492-10.79-4.109c-1.66-0.807-3.337-1.743-4.39-2.873 	c-1.063-1.141-0.664-1.728,0.805-2.856c2.863-1.783,6.646-2.769,10.03-4.027c3.47-1.15,6.886-2.284,10.246-3.397 	c6.757-2.164,13.286-4.253,19.553-6.26c6.268-2.038,12.276-4.033,17.811-6.558c2.741-1.309,5.445-2.628,7.66-4.831 	c1.066-1.039,2.081-2.798,1.616-4.613c-0.463-1.741-1.676-2.813-2.778-3.677c-2.29-1.707-4.726-2.754-7.072-3.711 	c-1.159-0.527-16.704-5.087-20.264-6.465c-3.505-1.438-6.561-3.004-8.728-4.808c-1.139-0.948-1.899-2.22-2.284-3.192h-1.694 	c0.203,0.769,0.587,1.728,1.089,2.481c1.803,2.921,5.025,4.797,8.542,6.531c3.55,1.688,7.683,3.276,12.14,4.634 	c0.561,0.198,11.733,3.919,14.011,5.184c2.167,1.198,4.71,3.204,3.419,5.152c-1.303,2.022-4.089,3.466-6.711,4.73 	c-5.436,2.496-11.528,4.439-17.872,6.412c-12.733,3.91-26.738,7.374-41.278,12.492c-1.836,0.731-3.724,1.457-5.425,3.123 	c-0.827,0.779-1.584,2.434-1.056,3.849c0.459,1.345,1.322,2.167,2.132,2.884c3.375,2.682,7.123,4.131,10.878,5.684 	c7.552,2.955,15.409,5.357,23.392,7.792c15.978,4.813,32.545,9.473,49.156,14.836c8.306,2.678,16.618,5.522,24.841,8.674 	c3.992,1.509,8.077,3.352,10.529,6.028c2.487,2.522,0.945,5.686-2.068,8.68c-5.998,5.729-13.987,9.985-21.613,14.208 	c-7.747,4.168-15.627,8.111-23.422,12.104c-15.589,7.984-30.948,16.068-44.919,25.625c-6.96,4.801-13.61,9.932-19.437,15.878 	c-5.945,5.946-10.583,13.126-13.36,20.785c-5.656,15.535-3.321,31.534,0.878,44.482c4.243,13.162,10.38,24.174,16.252,33.509 	c5.092,7.919,10.04,14.578,14.512,20.162c3.59,0.151,7.19,0.263,10.817,0.265c-0.744-0.855-1.471-1.685-2.258-2.613 	c-4.957-5.832-10.69-13.167-16.56-22.021c-5.77-8.884-11.763-19.349-15.878-31.555c-4.103-12.059-6.266-26.396-1.501-40.005 	c4.464-13.751,16.616-24.532,29.95-33.984c13.427-9.468,28.501-17.693,43.931-25.864c7.721-4.093,15.56-8.152,23.347-12.482 	c7.723-4.461,15.658-8.675,22.496-15.341c1.645-1.732,3.295-3.703,4.132-6.478c0.958-2.822-0.17-6.309-2.033-8.2 	c-3.702-3.834-8.138-5.463-12.343-7.065c-8.355-3.066-16.776-5.814-25.161-8.387c-3.265-1.003-6.483-1.886-9.736-2.84 	c5.906,1.629,11.813,3.241,17.757,5.008c8.247,2.461,16.523,5.083,24.661,8.058c4.013,1.467,8.07,3.065,10.496,5.757 	c2.538,2.528,1.583,5.893-0.934,9.125c-5.101,6.298-12.637,11.146-19.824,15.797c-7.32,4.616-14.87,8.895-22.379,13.124 	c-15.032,8.45-30.021,16.567-43.989,25.575c-6.957,4.514-13.731,9.291-19.793,14.687c-6.213,5.615-11.281,12.381-14.201,20.026 	c-5.924,15.59-2.024,31.626,3.315,43.889c5.583,12.484,12.727,22.669,19.475,31.2c6.789,8.525,13.282,15.424,18.783,20.928 	c1.104,1.105,2.137,2.113,3.158,3.107c3.731-0.213,7.43-0.528,11.117-0.899c-2.463-2.217-5.311-4.839-8.555-8.002 	c-5.423-5.273-11.819-11.884-18.468-19.997c-6.612-8.107-13.553-17.772-18.891-29.276c-5.141-11.371-8.558-25.407-3.712-38.628 	c4.596-13.33,17.616-22.996,31.049-32.051c13.558-9.023,28.364-17.328,43.312-26.011c7.474-4.352,15.014-8.766,22.409-13.578 	c7.306-4.937,14.854-9.734,20.786-17.197c1.419-1.907,2.716-4.164,3.142-6.942c0.45-2.836-0.773-5.904-2.604-7.755 	C346.73,307.305,342.172,305.864,338.076,304.359z M221.065,271.358c-1.426-1.264-1.951-2.128-0.918-3.146 	c1.049-1.093,2.805-1.921,4.492-2.587c0.024-0.009,0.048-0.016,0.072-0.025c-0.773,0.563-1.585,1.228-2.048,2.45 	c-0.513,1.504,0.281,3.01,1.019,3.797c1.56,1.684,3.343,2.609,5.119,3.531c0.789,0.391,1.608,0.697,2.41,1.05 	C227.583,275.012,223.851,273.531,221.065,271.358z"/> <path style="fill:#74B75A;" d="M510.053,224.905C444.248,223.183,323,216.9,323,222.333c0,32.667-36,35.667-36,42 	c0,10.333,143.095,20.877,163,55c14,24-75.333,60.667-81.333,77c-7.143,19.445,17.538,42.627,46.827,59.838 	C474.286,409.265,512,337.058,512,256C512,245.466,511.289,235.105,510.053,224.905z"/> <path style="fill:#5F8C6E;" d="M508.006,211.165l-118.672-23.832L328,208c0,0,3.333,33.333-16,48c-17.422,13.217,128,20.667,152,56 	s-28.667,54-54,73.333C391.122,399.74,400,424,435.288,438.67C482.612,392.216,512,327.553,512,256 	C512,240.695,510.581,225.731,508.006,211.165z"/> <path style="fill:#74B75A;" d="M242.333,316.333C242.333,308,167,296.667,160,280L1.469,283.333 	c5.634,53.068,27.512,101.255,60.527,139.592c13.026-29.465,47.992-67.85,97.337-79.258 	C221.333,329.333,242.333,323,242.333,316.333z"/> <path style="fill:#5F8C6E;" d="M175.5,298c-30.87-10.645-43.082-32.341-55-40.5c-23.214-15.893-81.576-52.36-110.977-70.634 	C3.365,208.866,0,232.034,0,256c0,50.974,14.958,98.425,40.638,138.323c36.78-37.009,75.833-56.88,136.862-67.823 	C221.698,318.575,204.5,308,175.5,298z"/> <rect x="148.22" y="226.29" style="fill:#5F4648;" width="8.686" height="87.38"/> <path style="fill:#5F8C6E;" d="M185.134,250.462c0,24.993-14.581,37.539-32.567,37.539S120,275.455,120,250.462 	S139.949,128,152.567,128S185.134,225.468,185.134,250.462z"/> <path style="fill:#5F9D5F;" d="M152.567,128c-2.499,0-5.287,3.864-8.149,10.19c10.293,15.589,23.61,92.61,23.61,114.004 	c0,20.901-9.294,32.668-21.635,35.253c2.003,0.347,4.059,0.553,6.174,0.553c17.986,0,32.567-12.545,32.567-37.539 	S165.185,128,152.567,128z"/> <rect x="342.34" y="240.25" style="fill:#5F4648;" width="6.876" height="31.75"/> <path style="fill:#5F8C6E;" d="M371.565,216.949c0,19.786-11.543,29.718-25.782,29.718s-25.782-9.932-25.782-29.718 	S335.793,120,345.782,120S371.565,197.162,371.565,216.949z"/> <path style="fill:#5F9D5F;" d="M345.782,120c-1.978,0-4.185,3.059-6.451,8.067c8.149,12.341,18.691,73.316,18.691,90.253 	c0,16.547-7.358,25.862-17.127,27.909c1.585,0.274,3.213,0.438,4.887,0.438c14.239,0,25.782-9.932,25.782-29.718 	S355.771,120,345.782,120z"/> <rect x="97" y="304.33" style="fill:#5F4648;" width="7.296" height="34"/> <path style="fill:#5FAF50;" d="M128,278.868c0,20.994-12.248,31.533-27.356,31.533s-27.356-10.538-27.356-31.533 	S90.045,176,100.643,176S128,257.873,128,278.868z"/> <path style="fill:#74B75A;" d="M100.644,176c-2.099,0-4.441,3.246-6.845,8.56c8.646,13.095,19.832,77.792,19.832,95.763 	c0,17.557-7.807,27.441-18.173,29.613c1.682,0.291,3.409,0.465,5.186,0.465c15.109,0,27.356-10.538,27.356-31.532 	S111.242,176,100.644,176z"/> <rect x="187.09" y="218.29" style="fill:#5F4648;" width="8.686" height="96.71"/> <path style="fill:#E6AA55;" d="M224,242.461C224,267.455,209.419,280,191.433,280s-32.567-12.545-32.567-37.539 	S178.815,120,191.433,120S224,217.468,224,242.461z"/> <path style="fill:#E6C35A;" d="M191.433,120c-2.499,0-5.287,3.864-8.149,10.19c10.293,15.589,23.61,92.61,23.61,114.004 	c0,20.901-9.294,32.668-21.635,35.253c2.003,0.347,4.059,0.553,6.174,0.553C209.419,280,224,267.455,224,242.461 	S204.05,120,191.433,120z"/> <rect x="319.71" y="231.25" style="fill:#5F4648;" width="7.296" height="40.75"/> <path style="fill:#E6AA55;" d="M296,206.868c0,20.994,12.248,31.533,27.356,31.533s27.356-10.538,27.356-31.533 	S333.955,104,323.357,104S296,185.873,296,206.868z"/> <path style="fill:#E6C35A;" d="M323.356,104c2.099,0,4.441,3.246,6.845,8.56c-8.646,13.095-19.832,77.792-19.832,95.763 	c0,17.557,7.807,27.441,18.173,29.613c-1.682,0.291-3.409,0.465-5.186,0.465c-15.109,0-27.356-10.538-27.356-31.532 	S312.758,104,323.356,104z"/> <rect x="39.794" y="318.33" style="fill:#5F4648;" width="11.12" height="52"/> <path style="fill:#5F9D5F;" d="M3.667,276.751c0,31.991,18.663,48.05,41.686,48.05s41.686-16.058,41.686-48.05 	S61.503,120,45.353,120S3.667,244.759,3.667,276.751z"/> <path style="fill:#5F8C6E;" d="M45.353,120c3.198,0,6.767,4.947,10.431,13.044c-13.175,19.954-30.221,118.541-30.221,145.925 	c0,26.754,11.897,41.815,27.692,45.124c-2.563,0.444-5.195,0.708-7.902,0.708c-23.023,0-41.686-16.058-41.686-48.049 	S29.202,120,45.353,120z"/> <path style="fill:#5F4648;" d="M485.15,328h-12.507v64h0.208c4.443-7.07,8.55-14.367,12.299-21.88L485.15,328L485.15,328z"/> <path style="fill:#5F8C6E;" d="M432,280.344c0,35.99,20.996,54.056,46.896,54.056c8.143,0,15.797-1.792,22.47-5.358 	C508.25,305.889,512,281.388,512,256c0-52.381-15.762-101.066-42.758-141.631C452.048,147.425,432,250.276,432,280.344z"/> <path style="fill:#5F9D5F;" d="M469.242,114.369C452.048,147.426,432,250.277,432,280.344c0,35.99,20.997,54.056,46.897,54.056 	c3.045,0,6.006-0.297,8.89-0.796c-17.77-3.722-31.154-20.667-31.154-50.764c0-25.531,13.169-106.029,26.117-145.647 	C478.626,129.338,474.131,121.715,469.242,114.369z"/> <rect x="122.08" y="250.33" style="fill:#5F4648;" width="9.92" height="85.67"/> <path style="fill:#88BE64;" d="M186.56,185.44c0-25.626-16.786-97.44-59.52-97.44s-59.52,71.814-59.52,97.44 	c0,12.434,6.309,23.7,16.524,32.03c2.035,21.967,20.498,39.17,42.996,39.17s40.962-17.204,42.996-39.17 	C180.251,209.139,186.56,197.874,186.56,185.44z"/> <path style="fill:#AAC864;" d="M127.04,88c-2.82,0-5.52,0.331-8.116,0.923c30.627,8.373,42.836,72.582,42.836,96.517 	c0,12.434-5.258,23.7-13.77,32.03c-1.486,19.257-13.496,34.849-29.067,38.403c2.629,0.5,5.341,0.767,8.116,0.767 	c22.498,0,40.962-17.204,42.996-39.17c10.214-8.33,16.524-19.596,16.524-32.03C186.56,159.814,169.774,88,127.04,88z"/> <rect x="356" y="210.75" style="fill:#5F4648;" width="8" height="69.25"/> <path style="fill:#88BE64;" d="M312,158.581C312,137.915,325.537,80,360,80s48,57.915,48,78.581 	c0,10.027-5.088,19.113-13.325,25.831C393.034,202.126,378.144,216,360,216s-33.034-13.874-34.675-31.589 	C317.088,177.693,312,168.608,312,158.581z"/> <path style="fill:#AAC864;" d="M360,80c2.274,0,4.451,0.267,6.545,0.744C341.846,87.496,332,139.278,332,158.581 	c0,10.027,4.24,19.113,11.104,25.831c1.199,15.53,10.884,28.104,23.441,30.97c-2.12,0.403-4.307,0.618-6.545,0.618 	c-18.144,0-33.034-13.874-34.675-31.589c-8.237-6.718-13.325-15.803-13.325-25.83C312,137.915,325.537,80,360,80z"/> <g> 	<rect x="65.92" y="282.33" style="fill:#5F4648;" width="12.16" height="101.67"/> 	<rect x="419.46" y="293.67" style="fill:#5F4648;" width="13.376" height="114.33"/> </g> <path style="fill:#5FAF50;" d="M476.307,244.59c0-28.749-17.14-119.745-33.913-163.972c-6.926-7.358-14.261-14.323-22.008-20.821 	C401.197,83.343,376,209.733,376,244.59c0,38.49,22.454,57.81,50.153,57.81C453.853,302.4,476.307,283.08,476.307,244.59z"/> <path style="fill:#74B75A;" d="M420.386,59.797C401.197,83.342,376,209.733,376,244.59c0,38.49,22.455,57.81,50.153,57.81 	c3.257,0,6.423-0.318,9.507-0.852c-19.004-3.981-33.317-22.102-33.317-54.29c0-31.701,18.985-142.673,34.542-172.406 	C431.616,69.591,426.095,64.585,420.386,59.797z"/><path style="fill:#5FAF50;" d="M72,80c-0.646,0-1.264,0.074-1.9,0.1c-35.08,37.062-59.24,84.558-67.211,137.394 	c3.458,8.005,9.08,15.236,16.406,21.211C21.789,265.632,44.421,286.72,72,286.72s50.211-21.088,52.706-48.015 	c12.521-10.211,20.254-24.021,20.254-39.262C144.96,168.03,124.383,80,72,80z"/> <path style="fill:#74B75A;" d="M72,80c-0.65,0-1.27,0.082-1.91,0.11c-0.969,1.023-1.965,2.021-2.917,3.06 	c33.753,15.69,47.387,88.319,47.387,116.272c0,15.242-6.445,29.051-16.879,39.262c-1.822,23.606-16.543,42.718-35.63,47.075 	c3.223,0.613,6.547,0.94,9.949,0.94c27.579,0,50.211-21.088,52.706-48.015c12.521-10.211,20.254-24.021,20.254-39.262 	C144.96,168.03,124.383,80,72,80z"/></svg> Target path',
				content: `<a class="btn btn-info" href="${hrefurl}">Open</a> <a class="btn btn-secondary" href="${hrefurl}" target="_blank">Open in New Tab</a> <button class="btn btn-danger" mdui-dialog-cancel>cancel</button><script>dialog.addEventListener('cancel.mdui.dialog', function () {
  console.log('cancel');
});</script>`,
				history: false,
				modal: true,
				closeOnEsc: true
			});
			return;
		}
		dialog.close();
		dialog = mdui.dialog({
			title: 'Failed to get the target path',
			content: 'It may be because this item does not exist in the disc! It may also be because the file [Shared with me] has not been added to Personal Drive!',
			history: false,
			modal: true,
			closeOnEsc: true,
			buttons: [{
				text: 'WTF ???'
			}]
		});
	})
}

function get_file(path, file, callback) {
	var key = "file_path_" + path + file['modifiedTime'];
	var data = localStorage.getItem(key);
	if (data != undefined) {
		return callback(data);
	} else {
		$.get(path, function (d) {
			localStorage.setItem(key, d);
			callback(d);
		});
	}
}


// File display ?a=view
function file(path) {
	var name = path.split('/').pop();
	var ext = name.split('.').pop().toLowerCase().replace(`?a=view`, "").toLowerCase();
	if ("|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${ext}|`) >= 0) {
		return file_code(path);
	}

	if ("|mp4|webm|avi|".indexOf(`|${ext}|`) >= 0) {
		return file_video(path);
	}

	if ("|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
		return file_video(path);
	}

	if ("|mp3|flac|wav|ogg|m4a|".indexOf(`|${ext}|`) >= 0) {
		return file_audio(path);
	}

	if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
		return file_image(path);
	}

	if ('pdf' === ext) return file_pdf(path);
}

// Document display |html|php|css|go|java|js|json|txt|sh|md|
function file_code(path) {
	var type = {
		"html": "html",
		"php": "php",
		"css": "css",
		"go": "golang",
		"java": "java",
		"js": "javascript",
		"json": "json",
		"txt": "Text",
		"sh": "sh",
		"md": "Markdown",
	};
	var name = path.split('/').pop();
	var ext = name.split('.').pop().toLowerCase();
	var href = window.location.origin + path;
	var content = `
<div class="container"><br>
<div class="card">
<div class="card-body">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
<code id="editor" class="card-text"></code>
</div>
<p class="card-text text-center"><a href="${href}" class="btn btn-primary">Download</a></p><br>`;
	$('#content').html(content);

	$.get(path, function (data) {
		$('#editor').html($('<div/><div/><div/>').text(data).html());
		var code_type = "Text";
		if (type[ext] != undefined) {
			code_type = type[ext];
		}
	});
}

function copyToClipboard(str) {
	const $temp = $("<input>");
	$("body").append($temp);
	$temp.val(str).select();
	document.execCommand("copy");
	$temp.remove();
}

// Document display video |mp4|webm|avi|
function file_video(path) {
	const url = window.location.origin + path;
	const content = `
  <link href="https://cdn.jsdelivr.net/gh/jscdn/css@master/video-js/video-js.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/gh/jscdn/js@master/video-js/video-js.min.js"></script>
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
  <video width="100%" height="auto" controls>
    <source src="${url}" type="video/mp4" />
    <source src="${url}" type="video/webm" />
  </video>
  </div>
  <p class="card-text text-center"><a href="${url}" class="btn btn-primary">Download</a></p><br>
  </div>
  </div>
  `;
	$('#content').html(content);
}

// File display Audio |mp3|flac|m4a|wav|ogg|
function file_audio(path) {
	var url = window.location.origin + path;
	var content = `
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
  <audio controls>
    <source src="${url}" type="audio/ogg">
    <source src="${url}" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>
  </div>
  <p class="card-text text-center"><a href="${url}" class="btn btn-primary">Download</a></p><br>
  </div>
  </div>
  `;
	$('#content').html(content);
}

// Document display pdf  pdf
function file_pdf(path) {
	const url = window.location.origin + path;
	const inline_url = `${url}?inline=true`
	const file_name = decodeURI(path.slice(path.lastIndexOf('/') + 1, path.length))
	var content = `
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
  <object data="${inline_url}" type="application/pdf" name="${file_name}" style="width:100%;height:94vh;"><embed src="${inline_url}" type="application/pdf"/></object>
  </div>
  <p class="card-text text-center"><a href="${url}" class="btn btn-primary">Download</a></p><br>
  </div>
  </div>
  `;
	$('#content').removeClass('mdui-container').addClass('mdui-container-fluid').css({
		padding: 0
	}).html(content);
}

// image display
function file_image(path) {
	var url = window.location.origin + path;
	var durl = decodeURI(url);
	// console.log(window.location.pathname)
	const currentPathname = window.location.pathname
	const lastIndex = currentPathname.lastIndexOf('/');
	const fatherPathname = currentPathname.slice(0, lastIndex + 1);
	// console.log(fatherPathname)
	let target_children = localStorage.getItem(fatherPathname);
	// console.log(`fatherPathname: ${fatherPathname}`);
	// console.log(target_children)
	let targetText = '';
	if (target_children) {
		try {
			target_children = JSON.parse(target_children);
			if (!Array.isArray(target_children)) {
				target_children = []
			}
		} catch (e) {
			console.error(e);
			target_children = [];
		}
		// <div id="btns" >
		//             ${targetObj[path].prev ? `<span id="leftBtn" data-direction="left" data-filepath="${targetObj[path].prev}"><i class="mdui-icon material-icons"></i><span style="margin-left: 10px;">Prev</span></span>` : `<span style="cursor: not-allowed;color: rgba(0,0,0,0.2);margin-bottom:20px;"><i class="mdui-icon material-icons"></i><span style="margin-left: 10px;">Prev</span></span>`}
		//             ${targetObj[path].next ? `<span id="rightBtn" data-direction="right"  data-filepath="${targetObj[path].next}"><i class="mdui-icon material-icons"></i><span style="margin-left: 10px;">Next</span></span>` : `<span style="cursor: not-allowed;color: rgba(0,0,0,0.2);"><i class="mdui-icon material-icons"></i><span style="margin-left: 10px;">Prev</span></span>`}
		// </div>
	}
	var content = `
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="alert alert-danger" id="folderne" role="alert"></div><script>document.getElementById("folderne").innerHTML=decodeURI(this.window.location.href.substring(window.location.href.lastIndexOf('/',window.location.href.lastIndexOf('/')+1))).replace('/','').replace('?a=view','');</script>
  <img src="${url}" width="50%">
  </div>
  <p class="card-text text-center"><a href="${url}" class="btn btn-primary">Download</a></p><br>
  </div>
  </div>
    `;
	// my code
	$('#content').html(content);
	$('#leftBtn, #rightBtn').click((e) => {
		let target = $(e.target);
		if (['I', 'SPAN'].includes(e.target.nodeName)) {
			target = $(e.target).parent();
		}
		const filepath = target.attr('data-filepath');
		const direction = target.attr('data-direction');
		//console.log(`${direction}Turn page ${filepath}`);
		file(filepath)
	});
}


// Time conversion
function utc2beijing(utc_datetime) {
	// Convert to normal time format year-month-day hour: minute: second
	var T_pos = utc_datetime.indexOf('T');
	var Z_pos = utc_datetime.indexOf('Z');
	var year_month_day = utc_datetime.substr(0, T_pos);
	var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
	var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

	// Processing becomes timestamp
	timestamp = new Date(Date.parse(new_datetime));
	timestamp = timestamp.getTime();
	timestamp = timestamp / 1000;

	// 8 hours increase, Beijing time is eight more time zones than UTC time
	var unixtimestamp = timestamp + 5.5 * 60 * 60;

	// Timestamp to time
	var unixtimestamp = new Date(unixtimestamp * 1000);
	var year = 1900 + unixtimestamp.getYear();
	var month = "0" + (unixtimestamp.getMonth() + 1);
	var date = "0" + unixtimestamp.getDate();
	var hour = "0" + unixtimestamp.getHours();
	var minute = "0" + unixtimestamp.getMinutes();
	var second = "0" + unixtimestamp.getSeconds();
	return year + "-" + month.substring(month.length - 2, month.length) + "-" + date.substring(date.length - 2, date.length) +
		" " + hour.substring(hour.length - 2, hour.length) + ":" +
		minute.substring(minute.length - 2, minute.length) + ":" +
		second.substring(second.length - 2, second.length);
}

// bytes adaptive conversion to KB, MB, GB
function formatFileSize(bytes) {
	if (bytes >= 1073741824) {
		bytes = (bytes / 1073741824).toFixed(2) + ' GB';
	} else if (bytes >= 1048576) {
		bytes = (bytes / 1048576).toFixed(2) + ' MB';
	} else if (bytes >= 1024) {
		bytes = (bytes / 1024).toFixed(2) + ' KB';
	} else if (bytes > 1) {
		bytes = bytes + ' bytes';
	} else if (bytes == 1) {
		bytes = bytes + ' byte';
	} else {
		bytes = '';
	}
	return bytes;
}

String.prototype.trim = function (char) {
	if (char) {
		return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
	}
	return this.replace(/^\s+|\s+$/g, '');
};


// README.md HEAD.md support
function markdown(el, data) {
	if (window.md == undefined) {
		//$.getScript('https://cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js',function(){
		window.md = window.markdownit();
		markdown(el, data);
		//});
	} else {
		var html = md.render(data);
		$(el).show().html(html);
	}
}

// Listen for fallback events
window.onpopstate = function () {
	var path = window.location.pathname;
	render(path);
}


$(function () {
	init();
	var path = window.location.pathname;
	/*$("body").on("click", '.folder', function () {
	    var url = $(this).attr('href');
	    history.pushState(null, null, url);
	    render(url);
	    return false;
	});

	$("body").on("click", '.view', function () {
	    var url = $(this).attr('href');
	    history.pushState(null, null, url);
	    render(url);
	    return false;
	});*/

	render(path);
});

