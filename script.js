const quotes = [
  "The darkest nights often become the place where God quietly teaches us how to find the light within ourselves.",
  "You don't have to carry every burden alone. Sometimes strength is simply trusting that God is carrying what you cannot.",
  "Even when you can't see tomorrow, God can. Keep taking one small step at a time.",
  "Your story is not ending in this chapter. God is still writing pages you haven't had the chance to read.",
  "Healing isn't about never breaking—it's about believing God can make something beautiful from every broken piece.",
  "When your heart feels too tired to hope, let God hold your hope until you're ready to carry it again.",
  "Storms may change the landscape of your life, but they can never erase the purpose God planted within you.",
  "You are more loved than your pain tells you, more valuable than your doubts whisper, and never beyond God's reach.",
  "Some prayers are spoken with words. Others are spoken through tears—and God understands both.",
  "You have survived every day that tried to break you. Trust that God didn't bring you this far to leave you here."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
