<script lang="ts">
  import ButtonIcon from "../../buttons/ButtonIcon.svelte";

  const { addCard } = $props();
</script>

<button
  data-cy="new-card"
  class="group outline-md-sys-color-outline-variant rounded-lg p-4 outline"
  onclick={addCard}
>
  <ButtonIcon type="button" iconProps={{ name: "add" }} />
</button>
