Javascript
	< script script >
		function greet() {
			alert('Welcome to Svelte!');
		}
	</script >

	HTML
	< button button onclick = { greet } > click me</button >

		CSS
		< style style >
			button {
	font - size: 2em;
}
	</style >



	{ #if porridge.temperature > 100 }
	< p > too hot!</p >
		{: else if 80 > porridge.temperature }
		< p > too cold!</p >
			{: else}
			< p > just right!</p >
				{/if}










// css
import "./Svelte.css";


function Svelte() {
	// Javascript
	function greet() {
		alert('Welcome to Svelte!');
	}


	// HTML
	return (<
		div >
		<
		button onclick={
				greet
			} > click me < /button> <
		/div>
			)
}