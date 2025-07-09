<script>
	import { greeting, formatMessage } from 'ui';
	
	const message = formatMessage('Frontend User');
</script>

<h1>Welcome to SvelteKit - Test 123</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div>
	<p>{greeting}</p>
	<p>{message}</p>
</div>
