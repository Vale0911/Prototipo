document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, titulo: 'Producto 1', descripcion: 'Plato decorativo con hermosos acabados coloridos.' },
        { id: 2, titulo: 'Producto 2', descripcion: 'Plato decorativo con acabado en forma de corazón.' },
        { id: 3, titulo: 'Producto 3', descripcion: 'Set de tres platos decorativos con hermosos acabados coloridos.' },
        { id: 4, titulo: 'Producto 4', descripcion: 'Individuales azules.' },
        { id: 5, titulo: 'Producto 5', descripcion: 'Individual con tonos cafés.' },
        { id: 6, titulo: 'Producto 6', descripcion: 'Combo de individuales con tonos cafés.' },
        { id: 7, titulo: 'Producto 7', descripcion: 'Individual gris con acabados en crochet.' },
    ];

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description'); // Cambiado a getElementById
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.ver-mas').forEach(button => {
        button.addEventListener('click', () => {
            const productoId = button.getAttribute('data-producto');
            const producto = productos.find(p => p.id == productoId);
            modalTitle.textContent = producto.titulo;
            modalDescription.textContent = producto.descripcion;
            modal.style.display = 'block'; // Mostrar el modal
            setTimeout(() => modal.classList.add('open'), 10);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('open');
        setTimeout(() => modal.style.display = 'none', 300);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('open');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.classList.remove('open');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation
    const form = document.querySelector('.formulario');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        if (name === '' || email === '' || message === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        alert('Formulario enviado con éxito!');
        form.reset();
    });
});

