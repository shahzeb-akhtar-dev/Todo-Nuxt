<template>
  <div>

    <div class="welcome-item row ">
      <div class="icon col-2">
        <slot name="icon"></slot>
      </div>
      <div class="item-body col-10">
        <div class="heading">
          <h4>
            <slot name="heading"></slot>
          </h4>

        </div>
        <div class="contant">
          <slot name="contant"></slot>
          <hr class="line">

        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
