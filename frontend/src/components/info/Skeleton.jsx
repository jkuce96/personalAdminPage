import React from 'react'

const Skeleton = () => {
  return (
    <div
  class="flex flex-col bg-white-300 w-full h-full animate-pulse rounded-xl p-4 gap-4"
>
  <div class="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
  <div class="flex flex-col gap-2">
    <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
    <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
    <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
    <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
  </div>
</div>

  )
}

export default Skeleton