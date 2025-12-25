// Mock Data
const products = [
    {
        id: 99,
        name: "Özel Tasarım 'EDA' T-Shirt",
        category: "T-Shirt",
        price: 550,
        image: "images/eda_tshirt.jpg"
    },
    {
        id: 1,
        name: "Basic Keten T-Shirt",
        category: "T-Shirt",
        price: 450,
        image: "images/keten_tshirt.jpg"
    },
    {
        id: 2,
        name: "Slim Fit Chino Pantolon",
        category: "Pantolon",
        price: 850,
        image: "images/slim_fit_chino.jpg"
    },
    {
        id: 3,
        name: "Klasik Denim Ceket",
        category: "Ceket",
        price: 1250,
        image: "images/klasik_denim_ceket.jpg"
    },
    {
        id: 4,
        name: "Deri Bileklik Seti",
        category: "Aksesuar",
        price: 150,
        image: "images/deri_bileklik_seti.jpg"
    },
    {
        id: 5,
        name: "Oversize Bej T-Shirt",
        category: "T-Shirt",
        price: 480,
        image: "images/oversize_bej_tshirt.jpg"
    },
    {
        id: 6,
        name: "Siyah Keten Pantolon",
        category: "Pantolon",
        price: 900,
        image: "images/siyah_keten_pantolon.jpg"
    },
    {
        id: 7,
        name: "Süet Bomber Ceket",
        category: "Ceket",
        price: 2100,
        image: "images/suet_bomber_ceket.jpg"
    },
    {
        id: 8,
        name: "Gümüş Zincir Kolye",
        category: "Aksesuar",
        price: 320,
        image: "images/gumus_zincir_kolye.jpg"
    },
    {
        id: 9,
        name: "İtalyan Kesim Siyah Takım Elbise",
        category: "Takım Elbise",
        price: 4500,
        image: "images/italyan_kesim_takim.jpg"
    },
    {
        id: 10,
        name: "Oversize Bej Trençkot",
        category: "Ceket",
        price: 5000,
        image: "images/oversize_bej_trenckot.jpg"
    },
    {
        id: 50,
        name: "Siyah Bershka Kaban",
        category: "Ceket",
        price: 9999,
        image: "images/siyah_bershka_kaban_yeni.jpg"
    },
    // Gömlekler
    {
        id: 11,
        name: "Beyaz Oxford Gömlek",
        category: "Gömlek",
        price: 1200,
        image: "images/beyaz_oxford_gomlek.jpg"
    },
    {
        id: 12,
        name: "Mavi Denim Gömlek",
        category: "Gömlek",
        price: 1350,
        image: "images/mavi_denim_gomlek.jpg"
    },
    {
        id: 13,
        name: "Çizgili Keten Gömlek",
        category: "Gömlek",
        price: 1400,
        image: "images/cizgili_keten_gomlek.jpg"
    },
    {
        id: 14,
        name: "Haki Casual Gömlek",
        category: "Gömlek",
        price: 1250,
        image: "images/haki_casual_gomlek.jpg"
    },
    // Ayakkabılar
    {
        id: 15,
        name: "Beyaz Deri Sneaker",
        category: "Ayakkabı",
        price: 2200,
        image: "images/beyaz_deri_sneaker.jpg"
    },
    {
        id: 16,
        name: "Süet Chelsea Bot",
        category: "Ayakkabı",
        price: 3500,
        image: "images/suet_chelsea_bot.jpg"
    },
    {
        id: 17,
        name: "Klasik Siyah Loafer",
        category: "Ayakkabı",
        price: 2800,
        image: "images/klasik_siyah_loafer.jpg"
    },
    // Şortlar
    {
        id: 18,
        name: "Bej Chino Şort",
        category: "Şort",
        price: 650,
        image: "images/bej_chino_sort.jpg"
    },
    {
        id: 19,
        name: "Lacivert Kargo Şort",
        category: "Şort",
        price: 700,
        image: "images/lacivert_kargo_sort.jpg"
    },
    // Ekstra T-Shirt / Sweatshirt
    {
        id: 20,
        name: "Antrasit Hoodie",
        category: "T-Shirt",
        price: 1100,
        image: "images/antrasit_hoodie.jpg"
    },
    {
        id: 21,
        name: "Uspa Lacivert T-Shirt",
        category: "T-Shirt",
        price: 600,
        image: "images/uspa_lacivert_tshirt.jpg"
    },
    // Ekstra Pantolon
    {
        id: 22,
        name: "Gri Yün Pantolon",
        category: "Pantolon",
        price: 1500,
        image: "images/gri_yun_pantolon.jpg"
    },
    {
        id: 23,
        name: "Mint Jogger Pantolon",
        category: "Pantolon",
        price: 800,
        image: "images/mint_jogger_pantolon.jpg"
    },
    // Ekstra Ceket
    {
        id: 24,
        name: "Gri Kaşe Kaban",
        category: "Ceket",
        price: 4200,
        image: "images/gri_kase_kaban.jpg"
    },
    {
        id: 25,
        name: "Siyah Deri Ceket",
        category: "Ceket",
        price: 8000,
        image: "images/siyah_deri_ceket.jpg"
    },
    // Ekstra Aksesuar
    {
        id: 26,
        name: "Klasik Kol Saati",
        category: "Aksesuar",
        price: 2500,
        image: "images/klasik_kol_saati.jpg"
    },
    {
        id: 27,
        name: "Kahverengi Deri Cüzdan",
        category: "Aksesuar",
        price: 450,
        image: "images/kahverengi_deri_cuzdan.jpg"
    },
    {
        id: 28,
        name: "Güneş Gözlüğü",
        category: "Aksesuar",
        price: 900,
        image: "images/gunes_gozlugu.jpg"
    },
    // Ekstra Takım Elbise
    {
        id: 29,
        name: "Siyah Keten Gömlek",
        category: "Gömlek",
        price: 1200,
        image: "images/siyah_keten_gomlek.jpg"
    },
    // Yeni Ayakkabılar (10 Adet)
    {
        id: 30,
        name: "Siyah Polo Yaka T-Shirt",
        category: "T-Shirt",
        price: 750,
        image: "images/siyah_polo_yaka_tshirt.jpg"
    },
    {
        id: 31,
        name: "Bej Rengi Ceket",
        category: "Ceket",
        price: 3500,
        image: "images/bej_rengi_ceket.jpg"
    },
    {
        id: 32,
        name: "Üstadın Özel Patlatma Ceketi",
        category: "Ceket",
        price: 316200,
        image: "images/ustadin_ozel_patlatma_ceketi.jpg"
    },
    {
        id: 33,
        name: "Klasik Siyah Oxford",
        category: "Ayakkabı",
        price: 2700,
        image: "images/klasik_siyah_oxford.jpg"
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
        name: "Lacivert Oversize Gömlek",
        category: "Gömlek",
        price: 700,
        image: "images/lacivert_oversize_gomlek.jpg"
    },
    {
        id: 36,
        name: "Lacivert Klasik Mont",
        category: "Ceket",
        price: 3600,
        image: "images/lacivert_klasik_mont.jpg"
    },
    {
        id: 37,
        name: "Spor Koşu Ayakkabısı",
        category: "Ayakkabı",
        price: 3500,
        image: "images/spor_kosu_ayakkabisi.jpg"
    },
    {
        id: 38,
        name: "Günlük Bej Sneaker",
        category: "Ayakkabı",
        price: 1600,
        image: "images/gunluk_bej_sneaker.jpg"
    },
    {
        id: 39,
        name: "Siyah Casual Bot",
        category: "Ayakkabı",
        price: 3100,
        image: "images/siyah_casual_bot.jpg"
    },
    // Yeni Polo T-Shirtler (10 Adet)
    {
        id: 40,
        name: "Kahverengi Polo",
        category: "T-Shirt",
        price: 850,
        image: "images/kahverengi_polo.jpg"
    },
    {
        id: 41,
        name: "Beyaz Klasik Polo",
        category: "T-Shirt",
        price: 850,
        image: "images/beyaz_klasik_polo.jpg"
    },
    {
        id: 42,
        name: "Lacivert Basic Polo",
        category: "T-Shirt",
        price: 900,
        image: "images/lacivert_basic_polo.jpg"
    },
    {
        id: 43,
        name: "Gri Melanj Polo",
        category: "T-Shirt",
        price: 950,
        image: "images/gri_melanj_polo.jpg"
    },
    {
        id: 44,
        name: "Çizgili Deniz Polo",
        category: "T-Shirt",
        price: 900,
        image: "images/cizgili_deniz_polo.jpg"
    },
    {
        id: 45,
        name: "Bordo Polo Yaka",
        category: "T-Shirt",
        price: 900,
        image: "images/bordo_polo.jpg"
    },

    {
        id: 47,
        name: "Antrasit Polo",
        category: "T-Shirt",
        price: 950,
        image: "images/antrasit_polo.jpg"
    },
    {
        id: 48,
        name: "Bej Örgü Polo",
        category: "T-Shirt",
        price: 1200,
        image: "images/bej_orgu_polo.jpg"
    },
    {
        id: 49,
        name: "Açık Mavi Polo",
        category: "T-Shirt",
        price: 900,
        image: "images/acik_mavi_polo.jpg"
    },
    {
        id: 50,
        name: "Sarı Polo Tshirt",
        category: "T-Shirt",
        price: 700,
        image: "images/sari_polo_tshirt.jpg"
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
    // Bind Add to Cart button in modal
    const modalBtn = document.getElementById('addToCartModal');
    const modalBtnMobile = document.getElementById('addToCartModalMobile'); // Mobile Button

    const handleAddToCart = () => {
        addToCart(null, product.id);
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    if (modalBtn) modalBtn.onclick = handleAddToCart;
    if (modalBtnMobile) modalBtnMobile.onclick = handleAddToCart;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

const closeBtnById = document.getElementById('closeModalBtn');

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close Button Event
if (closeBtnById) {
    closeBtnById.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
    });
}

// Close on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on ESC Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
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


// Menu Toggle Logic (Side Drawer - ROBUST)
const menuBtn = document.getElementById('mobile-menu-btn');
const menuDrawer = document.getElementById('menuDrawer');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuLinks = document.querySelectorAll('.menu-link'); // Select all links

function openMenu() {
    document.body.classList.add('menu-open');
    document.documentElement.style.overflow = 'hidden'; // Lock HTML scroll
    document.body.style.overflow = 'hidden';       // Lock Body scroll
}

function closeMenu() {
    document.body.classList.remove('menu-open');
    document.documentElement.style.overflow = '';  // Restore HTML
    document.body.style.overflow = '';        // Restore Body
}

if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openMenu();
    });
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
    });
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
}

// Close menu when a link is clicked & Filter Products
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Close menu first
        closeMenu();

        // Get Category
        const category = link.getAttribute('data-category');

        // If category exists, filter products
        if (category) {
            renderProducts(category);

            // Update Active State on Filter Buttons
            filterBtns.forEach(btn => {
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Smooth Scroll to Products
            const productSection = document.getElementById('products');
            if (productSection) {
                setTimeout(() => {
                    productSection.scrollIntoView({ behavior: 'smooth' });
                }, 300); // Slight delay to allow menu close animation
            }
        }
    });
});

// Close on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
        closeMenu();
    }
});

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
