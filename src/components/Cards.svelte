<script lang="ts">
	export let href = '';
	export let text = '';
	export let svg = '';
	export let alt = '';
	export let style = '';
</script>

<a
	{href}
	class="w-[182px] h-[182px] cursor-pointer flex flex-col justify-center items-center bg-primary-100 rounded-md border border-primary-200/50 gap-2 hover:bg-text-300/30 duration-200 transition-all ease"
>
	<img src={svg} {alt} class={`${style} h-28 w-28`} />
	<p class="text-text-600 font-semibold text-sm text-center">{text}</p>
</a>
