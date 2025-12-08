<script lang="ts">
  import Icon from "../../utils/icon/Icon.svelte";

  const { addCard } = $props();
</script>

<button
  data-cy="new-card"
  type="button"
  class="group outline-md-sys-color-outline-variant flex items-center justify-center rounded-lg p-4 outline"
  onclick={addCard}
>
  <Icon name="add" />
</button>
