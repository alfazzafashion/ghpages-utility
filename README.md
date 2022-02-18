<!-- Page styles -->
<link type='text/css' href='https://github.com/mansz81/osx/blob/main/css/demo.css' rel='stylesheet' media='screen' />

<!-- OSX Style CSS files -->
<link type='text/css' href='https://github.com/mansz81/osx/blob/main/css/osx.css' rel='stylesheet' media='screen' />

<!-- JS files are loaded at the bottom of the page -->
</head>
<body>
<div id='container'>
	<div id='logo'>
		<h1>Simple<span>Modal</span></h1>
		<span class='title'>A Modal Dialog Framework Plugin for jQuery</span>
	</div>
	<div id='content'>
		<div id='osx-modal'>
			<h3>OSX Style Modal Dialog</h3>
			<p>A modal dialog configured to behave like an OSX dialog. Demonstrates the use of the <code>onOpen</code> and <code> onClose</code> callbacks as well as custom styling and a handful of options.</p>
			<p>Inspired by <a href="http://okonet.ru/projects/modalbox/">ModalBox</a>, an OSX style dialog built with <a href="http://www.prototypejs.org/ ">prototype</a>.</p>
			<input type='button' name='osx' value='Demo' class='osx demo'/> or <a href='#' class='osx'>Demo</a>
		</div>
	
		<!-- modal content -->
		<div id="osx-modal-content">
			<div id="osx-modal-title">OSX Style Modal Dialog</div>
			<div class="close"><a href="#" class="simplemodal-close">x</a></div>
			<div id="osx-modal-data">
				<h2>Hello! I'm SimpleModal!</h2>
<details open="" class="details-reset border rounded-2">
  <summary class="px-3 py-2 border-bottom">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-device-camera-video">
    <path fill-rule="evenodd" d="..."></path>
</svg>
    <span aria-label="Video description dotnet-evergreen.mp4" class="m-1">dotnet-evergreen.mp4</span>
    <span class="dropdown-caret"></span>
  </summary>

  <video src="/src/assets/img/1.mp4" data-canonical-src="/src/assets/img/1.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 width-fit" style="max-height:640px;">

  </video>
</details>
				<p><button class="simplemodal-close">Close</button> <span>(or press ESC or click the overlay)</span></p>
			</div>
		</div>
	</div>
	<div id='footer'>
		&copy; 2013 <a href='http://www.ericmmartin.com/'>Eric Martin</a><br/>
		<a href='https://github.com/ericmmartin/simplemodal'>SimpleModal on GitHub</a><br/>
		<a href='http://twitter.com/ericmmartin'>@ericmmartin</a> | <a href='http://twitter.com/simplemodal'>@simplemodal</a>
	</div>
</div>
<!-- Load JavaScript files -->
<script type='text/javascript' src='https://github.com/mansz81/osx/blob/main/js/jquery.js'></script>
<script type='text/javascript' src='https://github.com/mansz81/osx/blob/main/js/jquery.simplemodal.js'></script>
<script type='text/javascript' src='https://github.com/mansz81/osx/blob/main/js/osx.js'></script>
</body>
</html>

