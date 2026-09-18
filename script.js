const toast = document.querySelector('.toast');
const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2400); };

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  document.querySelectorAll('.project-card').forEach((card) => { card.hidden = filter !== 'all' && !card.dataset.category.includes(filter); });
}));

const modal = document.querySelector('#project-modal');
const modalContent = document.querySelector('#modal-content');
const projectData = {
  creature: ['Stylized Creature Production & Rigging', '3D Generalist & Technical Rigging Artist', 'Custom facial and body rig featuring optimized weight painting, corrective shape keys and a production-ready FK/IK spine.', ['Autodesk Maya, Blender', '18,400 triangles', '4K PBR texture maps', 'Custom FK/IK spine + driven attributes']],
  model: ['Character Asset Study', '3D Modeling & LookDev', 'A considered low-poly character asset, built from clean topology through UV layout and final textured render.', ['Autodesk Maya, Substance 3D Painter', '18,400 triangles', 'Base Color, Normal, Roughness, AO', 'Optimized edge-flow and clean UVs']],
  commercial: ['The Boiler Room Visual Systems', 'Multimedia Artist / 3D Artist / Animator', 'A flexible visual language for commercial productions, spanning 3D graphics, motion design and campaign-ready delivery.', ['Maya, Blender, After Effects', 'Motion graphics system', 'Commercial delivery pipeline', 'Asset optimization + compositing']]
};
document.querySelectorAll('.project-card').forEach((card) => card.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON' || event.currentTarget) {
    const data = projectData[card.dataset.project];
    modalContent.innerHTML = `<div class="modal-inner"><span class="kicker">PROJECT BREAKDOWN / ${card.dataset.project.toUpperCase()}</span><h2>${data[0]}</h2><span class="modal-role">${data[1]}</span><p>${data[2]}</p><div class="modal-details">${data[3].map((item, index) => `<div><strong>${['SOFTWARE', 'POLYCOUNT', 'TEXTURES', 'RIGGING'][index]}</strong>${item}</div>`).join('')}</div></div>`;
    modal.showModal();
  }
}));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
document.querySelector('.email-link').addEventListener('click', async (event) => { const email = event.currentTarget.dataset.copy; try { await navigator.clipboard.writeText(email); showToast('Email copied to clipboard'); } catch { showToast(email); } });
document.querySelector('#contact-form').addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.reset(); showToast('Thanks. Your message is ready to send.'); });
document.querySelector('.menu-toggle').addEventListener('click', () => showToast('Use the section links to navigate this page.'));

const tbrVideo = document.querySelector('.visual-commercial .project-video');
const tbrLabel = document.querySelector('.visual-commercial .commercial-word');
if (tbrVideo && tbrLabel) {
  tbrVideo.addEventListener('playing', () => tbrLabel.classList.add('is-hidden'));
  tbrVideo.addEventListener('pause', () => tbrLabel.classList.remove('is-hidden'));
  tbrVideo.addEventListener('ended', () => tbrLabel.classList.remove('is-hidden'));
}