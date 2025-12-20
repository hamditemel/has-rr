// Mock Data
const products = [
    {
        id: 99,
        name: "Özel Tasarım 'EDA' T-Shirt",
        category: "T-Shirt",
        price: 550,
        image: "eda_tshirt.png"
    },
    {
        id: 1,
        name: "Basic Keten T-Shirt",
        category: "T-Shirt",
        price: 450,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Slim Fit Chino Pantolon",
        category: "Pantolon",
        price: 850,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Klasik Denim Ceket",
        category: "Ceket",
        price: 1250,
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=2669&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Deri Bileklik Seti",
        category: "Aksesuar",
        price: 150,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Oversize Bej T-Shirt",
        category: "T-Shirt",
        price: 480,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Siyah Keten Pantolon",
        category: "Pantolon",
        price: 900,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2597&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Süet Bomber Ceket",
        category: "Ceket",
        price: 2100,
        image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=2673&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Gümüş Zincir Kolye",
        category: "Aksesuar",
        price: 320,
        image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 9,
        name: "İtalyan Kesim Siyah Takım Elbise",
        category: "Takım Elbise",
        price: 4500,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 10,
        name: "Oversize Bej Trençkot",
        category: "Ceket",
        price: 5000,
        image: "trenckot.jpg"
    },
    {
        id: 50,
        name: "Siyah Bershka Kaban",
        category: "Ceket",
        price: 9999,
        image: "siyah_bershka_kaban.jpg"
    },
    // Gömlekler
    {
        id: 11,
        name: "Beyaz Oxford Gömlek",
        category: "Gömlek",
        price: 1200,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2576&auto=format&fit=crop"
    },
    {
        id: 12,
        name: "Mavi Denim Gömlek",
        category: "Gömlek",
        price: 1350,
        image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 13,
        name: "Çizgili Keten Gömlek",
        category: "Gömlek",
        price: 1400,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2525&auto=format&fit=crop"
    },
    {
        id: 14,
        name: "Haki Casual Gömlek",
        category: "Gömlek",
        price: 1250,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2670&auto=format&fit=crop"
    },
    // Ayakkabılar
    {
        id: 15,
        name: "Beyaz Deri Sneaker",
        category: "Ayakkabı",
        price: 2200,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2612&auto=format&fit=crop"
    },
    {
        id: 16,
        name: "Süet Chelsea Bot",
        category: "Ayakkabı",
        price: 3500,
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=2592&auto=format&fit=crop"
    },
    {
        id: 17,
        name: "Klasik Siyah Loafer",
        category: "Ayakkabı",
        price: 2800,
        image: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2573&auto=format&fit=crop"
    },
    // Şortlar
    {
        id: 18,
        name: "Bej Chino Şort",
        category: "Şort",
        price: 650,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 19,
        name: "Lacivert Kargo Şort",
        category: "Şort",
        price: 700,
        image: "lacivert_kargo_sort.jpg"
    },
    // Ekstra T-Shirt / Sweatshirt
    {
        id: 20,
        name: "Antrasit Hoodie",
        category: "T-Shirt",
        price: 1100,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 21,
        name: "Polo Yaka T-Shirt",
        category: "T-Shirt",
        price: 600,
        image: "https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?q=80&w=2574&auto=format&fit=crop"
    },
    // Ekstra Pantolon
    {
        id: 22,
        name: "Gri Yün Pantolon",
        category: "Pantolon",
        price: 1500,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2597&auto=format&fit=crop"
    },
    {
        id: 23,
        name: "Jogger Pantolon",
        category: "Pantolon",
        price: 800,
        image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=2574&auto=format&fit=crop"
    },
    // Ekstra Ceket
    {
        id: 24,
        name: "Kaşe Kaban",
        category: "Ceket",
        price: 4200,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 25,
        name: "Siyah Deri Ceket",
        category: "Ceket",
        price: 3500,
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=2670&auto=format&fit=crop"
    },
    // Ekstra Aksesuar
    {
        id: 26,
        name: "Klasik Kol Saati",
        category: "Aksesuar",
        price: 2500,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2599&auto=format&fit=crop"
    },
    {
        id: 27,
        name: "Deri Cüzdan",
        category: "Aksesuar",
        price: 450,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 28,
        name: "Güneş Gözlüğü",
        category: "Aksesuar",
        price: 900,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2670&auto=format&fit=crop"
    },
    // Ekstra Takım Elbise
    {
        id: 29,
        name: "Lacivert Slim Fit Takım",
        category: "Takım Elbise",
        price: 4800,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
    },
    // Yeni Ayakkabılar (10 Adet)
    {
        id: 30,
        name: "Beyaz Low-Top Sneaker",
        category: "Ayakkabı",
        price: 1800,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2598&auto=format&fit=crop"
    },
    {
        id: 31,
        name: "Siyah Deri Bot",
        category: "Ayakkabı",
        price: 3200,
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=2592&auto=format&fit=crop"
    },
    {
        id: 32,
        name: "Kahverengi Bağcıklı Bot",
        category: "Ayakkabı",
        price: 2900,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 33,
        name: "Klasik Siyah Oxford",
        category: "Ayakkabı",
        price: 2700,
        image: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2573&auto=format&fit=crop"
    },
    {
        id: 34,
        name: "Süet Loafer",
        category: "Ayakkabı",
        price: 2400,
        image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 35,
        name: "Premium Chelsea Bot",
        category: "Ayakkabı",
        price: 3800,
        image: "https://images.unsplash.com/photo-1534653299134-96a171b61581?q=80&w=2522&auto=format&fit=crop"
    },
    {
        id: 36,
        name: "Kahverengi Deri Ayakkabı",
        category: "Ayakkabı",
        price: 2600,
        image: "kahverengi_deri_ayakkabi.png"
    },
    {
        id: 37,
        name: "Spor Koşu Ayakkabısı",
        category: "Ayakkabı",
        price: 3500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 38,
        name: "Günlük Bej Sneaker",
        category: "Ayakkabı",
        price: 1600,
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=2665&auto=format&fit=crop"
    },
    {
        id: 39,
        name: "Siyah Casual Bot",
        category: "Ayakkabı",
        price: 3100,
        image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=2690&auto=format&fit=crop"
    },
    // Yeni Polo T-Shirtler (10 Adet)
    {
        id: 40,
        name: "Kahverengi Polo",
        category: "T-Shirt",
        price: 850,
        image: "kahverengi_polo.jpg"
    },
    {
        id: 41,
        name: "Beyaz Klasik Polo",
        category: "T-Shirt",
        price: 850,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 42,
        name: "Lacivert Basic Polo",
        category: "T-Shirt",
        price: 900,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 43,
        name: "Gri Melanj Polo",
        category: "T-Shirt",
        price: 950,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2564&auto=format&fit=crop"
    },
    {
        id: 44,
        name: "Haki Yeşil Polo",
        category: "T-Shirt",
        price: 900,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=2671&auto=format&fit=crop"
    },
    {
        id: 45,
        name: "Bordo Polo Yaka",
        category: "T-Shirt",
        price: 900,
        image: "bordo_polo.jpg"
    },
    {
        id: 46,
        name: "Çizgili Denizci Polo",
        category: "T-Shirt",
        price: 1100,
        image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 47,
        name: "Antrasit Polo",
        category: "T-Shirt",
        price: 950,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 48,
        name: "Bej Örgü Polo",
        category: "T-Shirt",
        price: 1200,
        image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=2574&auto=format&fit=crop"
    },
    {
        id: 49,
        name: "Açık Mavi Polo",
        category: "T-Shirt",
        price: 900,
        image: "https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?q=80&w=2574&auto=format&fit=crop"
    }
];

// Elements
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('productModal');
const closeModalBtn = document.querySelector('.close-modal');
const toast = document.getElementById('toast');
const cartCountEl = document.querySelector('.cart-count');
const cartSidebar = document.getElementById('cartSidebar');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalCountEl = document.getElementById('cartTotalCount');
const cartTotalPriceEl = document.getElementById('cartTotalPrice');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.querySelector('.close-cart');
const cartLink = document.querySelector('.cart-link');

let cart = [];

const searchInput = document.querySelector('.search-box input');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    updateCartUI();
});

// Search Logic
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
});

// Render Products Wrapper
function renderProducts(category) {
    const filtered = category === 'all'
        ? products
        : products.filter(p => p.category === category);
    displayProducts(filtered);
}

// Display Products Helper
function displayProducts(items) {
    productGrid.innerHTML = '';

    if (items.length === 0) {
        productGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">Aradığınız kriterlere uygun ürün bulunamadı.</div>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="add-btn" onclick="addToCart(event, ${product.id})">SEPETE EKLE</button>
            </div>
            <div class="product-info">
                <span class="product-category-label">${product.category}</span>
                <h3>${product.name}</h3>
                <div class="product-price">${product.price} TL</div>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-btn')) {
                openModal(product);
            }
        });

        productGrid.appendChild(card);
    });
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        renderProducts(category);
    });
});

// Modal Logic
function openModal(product) {
    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `${product.price} TL`;

    // Bind Add to Cart button in modal
    const modalBtn = document.getElementById('addToCartModal');
    modalBtn.onclick = () => {
        addToCart(null, product.id);
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Cart Logic
window.addToCart = function (e, id) {
    if (e) e.stopPropagation();

    const product = products.find(p => p.id === id);
    cart.push(product);

    updateCartUI();
    showToast();
    openCart(); // Automatically open cart to show the added item
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    // Update Counts
    cartCountEl.textContent = cart.length;
    cartTotalCountEl.textContent = cart.length;

    // Calculate Total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalPriceEl.textContent = `${total} TL`;

    // Render Items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-message">Sepetiniz şu an boş.</div>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} TL</div>
                <button class="remove-item" onclick="removeFromCart(${index})">Kaldır</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    // Animate Icon
    cartCountEl.parentElement.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
    ], 200);
}

// Sidebar Logic
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
});

closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Toast Notification
function showToast(message, type = 'success') {
    toast.textContent = message || (type === 'success' ? 'İşlem Başarılı' : 'Bir hata oluştu');
    toast.className = `toast ${type} show`; // Reset class to handle type changes

    setTimeout(() => {
        toast.className = 'toast'; // Hide
    }, 3000);
}

// Chat Widget Logic
const chatToggle = document.querySelector('.chat-toggle');
const chatWindow = document.querySelector('.chat-window');
const closeChatBtn = document.querySelector('.close-chat');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendMessage');
const chatBody = document.getElementById('chatBody');

if (chatToggle && chatWindow && closeChatBtn) {
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });

    closeChatBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });
}

function sendMessage() {
    const text = chatInput.value.trim();
    if (text) {
        addMessage(text, 'user');
        chatInput.value = '';

        setTimeout(() => {
            const replies = [
                "Bize ulaştığınız için teşekkürler, en kısa sürede dönüş yapacağız.",
                "Şu an tüm temsilcilerimiz meşgul, lütfen bekleyiniz.",
                "Bu konu hakkında size 'Müşteri Hizmetleri' sayfamızdan yardımcı olabiliriz.",
                "Sipariş numaranızı iletirseniz kontrol edebilirim."
            ];
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            addMessage(randomReply, 'bot');
        }, 1000);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

if (sendBtn) sendBtn.addEventListener('click', sendMessage);
if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}


// Menu Toggle Logic
const menuBtn = document.getElementById('mobile-menu-btn');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

if (menuBtn && menuOverlay && closeMenuBtn) {
    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenuBtn.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// --- PROFESSIONAL AUTH LOGIC ---

// Elements
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLoginBtn = document.getElementById('closeLogin');
const closeRegisterBtn = document.getElementById('closeRegister');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Helper: Find links dynamically (since we might replace them or change text)
function getAuthLinks() {
    return {
        login: document.getElementById('loginBtn'),
        register: document.getElementById('registerBtn')
    };
}

// Helper: Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// 1. Initial Setup (Event Listeners)
const { login: lLink, register: rLink } = getAuthLinks();

if (lLink) {
    lLink.addEventListener('click', (e) => {
        // Only open if NOT logged in (Logic handled in checkAuth, but good safeguard)
        if (!localStorage.getItem('currentUser')) {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

if (rLink) {
    rLink.addEventListener('click', (e) => {
        if (!localStorage.getItem('currentUser')) {
            e.preventDefault();
            registerModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

// 2. Dynamic UI Update (No Reload)
function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const { login, register } = getAuthLinks();

    if (!login || !register) return;

    if (user) {
        // LOGGED IN STATE
        login.textContent = user.name.toUpperCase();
        login.removeAttribute('href'); // Disable link behavior
        login.style.cursor = 'default';

        register.textContent = 'ÇIKIŞ YAP';
        register.href = '#';

        // Clone to remove old listeners (Cleanest way without named functions)
        const newRegister = register.cloneNode(true);
        register.parentNode.replaceChild(newRegister, register);

        newRegister.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            showToast('Çıkış yapıldı', 'success');
            updateAuthUI(); // Re-render UI

            // Optional: Reload if on a protected page
        });

    } else {
        // GUEST STATE
        login.textContent = 'GİRİŞ YAP';
        login.href = '#';
        login.style.cursor = 'pointer';

        register.textContent = 'KAYIT OL';
        register.href = '#';

        // Re-attach modal openers
        const newLogin = login.cloneNode(true);
        const newRegister = register.cloneNode(true);

        login.parentNode.replaceChild(newLogin, login);
        register.parentNode.replaceChild(newRegister, register);

        newLogin.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        newRegister.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
}

// 3. Close Modals Logic
const closeBtns = [closeLoginBtn, closeRegisterBtn];
closeBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            if (loginModal) loginModal.classList.remove('active');
            if (registerModal) registerModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});

// 4. Switch Modals
const openRegBtn = document.getElementById('openRegisterFromLogin');
if (openRegBtn) {
    openRegBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('active');
        registerModal.classList.add('active');
    });
}

const openLogBtn = document.getElementById('openLoginFromRegister');
if (openLogBtn) {
    openLogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.classList.remove('active');
        loginModal.classList.add('active');
    });
}

// 5. REGISTER FORM SUBMISSION
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('registerName');
        const emailInput = document.getElementById('registerEmail');
        const passInput = document.getElementById('registerPassword');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passInput.value.trim();

        // VALIDATION
        if (name.length < 2) {
            showToast('Lütfen geçerli bir isim giriniz.', 'error');
            return;
        }
        if (!validateEmail(email)) {
            showToast('Lütfen geçerli bir e-posta adresi giriniz.', 'error');
            return;
        }
        if (password.length < 6) {
            showToast('Şifreniz en az 6 karakter olmalıdır.', 'error');
            return;
        }

        // Logic
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (users.find(u => u.email === email)) {
            showToast('Bu e-posta adresi zaten kayıtlı.', 'error');
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Auto Login
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        showToast('Kayıt başarılı! Hoşgeldiniz.', 'success');
        updateAuthUI(); // Update Header

        // Close Modal
        registerModal.classList.remove('active');
        document.body.style.overflow = 'auto';

        // Clear Form
        registerForm.reset();
    });
}

// 6. LOGIN FORM SUBMISSION
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (!validateEmail(email)) {
            showToast('Lütfen geçerli bir e-posta giriniz.', 'error');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            showToast(`Tekrar hoşgeldiniz, ${user.name}`, 'success');

            updateAuthUI(); // Update Header

            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            loginForm.reset();
        } else {
            showToast('Hatalı e-posta veya şifre.', 'error');

            // Visual Error Feedback
            const emailInput = document.getElementById('loginEmail');
            const passInput = document.getElementById('loginPassword');

            [emailInput, passInput].forEach(input => {
                input.classList.add('input-error');
                setTimeout(() => input.classList.remove('input-error'), 500);
            });
        }
    });
}

// Initialize
updateAuthUI();
