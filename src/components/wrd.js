import worldID from "@worldcoin/id";
worldID.init('world-id-container', {
    action_id: 'wid_staging_PN8fFL7V2N', // obtain this from developer.worldcoin.org
    signal: 'my_signal',
    enableTelemetry: true, // optional, but recommended
  })
  document.addEventListener('DOMContentLoaded', async function () {
    try {
      const result = await worldID.enable()
      console.log('World ID verified succesfully:', result)
    } catch (failure) {
      console.warn('World ID verification failed:', failure)
      // Re-activate here so your end user can try again
    }
  })
  document.addEventListener('DOMContentLoaded', function () {
    worldID
      .enable()
      .then((result) => {
        console.log('World ID verified succesfully:', result)
      })
      .catch((failure) => {
        console.warn('World ID verification failed:', failure)
        // Re-activate here so your end user can try again
      })
  })