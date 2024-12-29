// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the search
    function handleSearch(event) {
        event.preventDefault();
        const searchInput = document.querySelector('.search-input');
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // Here you would typically send the search term to a backend or redirect to a search results page
            searchInput.value = ''; // Clear the input after search
        }
    }

    // Add event listener to the search form
    const searchForm = document.querySelector('.nav-search');
    searchForm.addEventListener('submit', handleSearch);

    // Function to handle "Sign In" click
    function handleSignIn() {
        window.location.href = 'login.html';
    }

    // Add event listener to the sign-in element
    const signInElement = document.querySelector('.nav-signin');
    signInElement.addEventListener('click', handleSignIn);

    // Function to handle "Cart" click
    function handleCartClick() {
        alert('Shopping cart functionality will be implemented here.');
        // Here you would typically open the cart modal or redirect to the cart page
    }

    // Add event listener to the cart element
    const cartElement = document.querySelector('.nav-cart');
    cartElement.addEventListener('click', handleCartClick);

    // Function to handle "Shop more" links
    function handleShopMore(event) {
        const category = event.target.closest('.box-content').querySelector('h2').textContent;
        alert(`You clicked to shop more in the ${category} category.`);
        // Here you would typically redirect to the category page
    }

    // Add event listeners to all "Shop more" links
    const shopMoreLinks = document.querySelectorAll('.box-content a');
    shopMoreLinks.forEach(link => {
        link.addEventListener('click', handleShopMore);
    });

    // Function to update language on the page
    function updateLanguage(language) {
        const translations = {
            'EN': {
                deliverTo: 'Deliver to',
                searchPlaceholder: 'Search Amazon',
                signIn: 'Hello, sign in',
                accountsLists: 'Accounts & Lists',
                returns: 'Returns',
                cart: 'Cart',
                todaysDeals: "Today's Deals",
                customerService: 'Customer Service',
                registry: 'Registry',
                giftCards: 'Gift Cards',
                sell: 'Sell',
                shopDeals: 'Shop deals in Electronics',
                amazonMessage: 'You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.',
                clickHere: 'Click here to go to amazon.in',
                backToTop: 'Back to top',
                getToKnowUs: 'Get to Know Us',
                aboutAmazon: 'About Amazon',
                careers: 'Careers',
                pressReleases: 'Press Releases',
                amazonScience: 'Amazon Science',
                connectWithUs: 'Connect with Us',
                facebook: 'Facebook',
                twitter: 'Twitter',
                instagram: 'Instagram',
                makeMoneyWithUs: 'Make Money with Us',
                sellOnAmazon: 'Sell on Amazon',
                sellUnderAccelerator: 'Sell under Amazon Accelerator',
                protectBrand: 'Protect and Build Your Brand',
                globalSelling: 'Amazon Global Selling',
                becomeAffiliate: 'Become an Affiliate',
                fulfilmentByAmazon: 'Fulfilment by Amazon',
                advertise: 'Advertise Your Products',
                amazonPay: 'Amazon Pay on Merchants',
                letUsHelpYou: 'Let Us Help You',
                yourAccount: 'Your Account',
                returnsCentre: 'Returns Centre',
                purchaseProtection: '100% Purchase Protection',
                amazonApp: 'Amazon App Download',
                help: 'Help',
                conditions: 'Conditions of Use',
                privacyNotice: 'Privacy Notice',
                adsPrivacy: 'Your Ads Privacy Choices'
            },
            'HI': {
                deliverTo: 'यहाँ भेजें',
                searchPlaceholder: 'Amazon पर खोजें',
                signIn: 'नमस्ते, साइन इन करें',
                accountsLists: 'अकाउंट और सूचियाँ',
                returns: 'रिटर्न',
                cart: 'कार्ट',
                todaysDeals: "आज के ऑफर",
                customerService: 'ग्राहक सेवा',
                registry: 'रजिस्ट्री',
                giftCards: 'गिफ्ट कार्ड',
                sell: 'बेचें'
            },
            'BN': {
                deliverTo: 'এখানে পাঠান',
                searchPlaceholder: 'Amazon-এ খুঁজুন',
                signIn: 'নমস্কার, সাইন ইন করুন',
                accountsLists: 'অ্যাকাউন্ট ও তালিকা',
                returns: 'রিটার্ন',
                cart: 'কার্ট',
                todaysDeals: "আজকের অফার",
                customerService: 'গ্রাহক পরিষেবা',
                registry: 'রেজিস্ট্রি',
                giftCards: 'গিফ্ট কার্ড',
                sell: 'বিক্রি করুন'
            },
            'TE': {
                deliverTo: 'ఇక్కడికి పంపండి',
                searchPlaceholder: 'Amazon లో వెతకండి',
                signIn: 'నమస్కారం, సైన్ ఇన్ చేయండి',
                accountsLists: 'ఖాతాలు & జాబితాలు',
                returns: 'రిటర్న్స్',
                cart: 'కార్ట్',
                todaysDeals: "నేటి ఆఫర్లు",
                customerService: 'కసటమయయర్ సేవా',
                registry: 'రిజిస్ట్రీ',
                giftCards: 'గిఫ్ట్ కార్డ్స్',
                sell: 'విక్రయండి'
            },
            'MR': {
                deliverTo: 'येथे पाठवा',
                searchPlaceholder: 'Amazon वर शोधा',
                signIn: 'नमस्कार, साइन इन करा',
                accountsLists: 'खाती आणि याद्या',
                returns: 'परत करा',
                cart: 'कार्ट',
                todaysDeals: "आजच्या ऑफर्स",
                customerService: 'ग्राहक सेवा',
                registry: 'रजिस्ट्री',
                giftCards: 'गिफ्ट कार्ड्स',
                sell: 'विक्री करा'
            },
            'TA': {
                deliverTo: 'இங்கே அனுப்பவும்',
                searchPlaceholder: 'Amazon இல் தேடுங்கள்',
                signIn: 'வணக்கம், உள்நுழையவும்',
                accountsLists: 'கணக்குகள் & பட்டியல்கள்',
                returns: 'திருப்பியனுப்புதல்',
                cart: 'வண்டி',
                todaysDeals: "இன்றைய சலுகைகள்",
                customerService: 'வாடிக்கையாளர் சேவை',
                registry: 'பதிவேடு',
                giftCards: 'பரிசு அட்டைகள்',
                sell: 'விற்பனை செய்'
            }
        };

        const t = translations[language];

        // Update text content
        const elements = {
            '.address-p1': t.deliverTo,
            '.search-input': t.searchPlaceholder,
            '.nav-signin span': t.signIn,
            '.nav-signin .signin-p1': t.accountsLists,
            '.nav-orders span': t.returns,
            '.panel-deals': t.shopDeals,
            '.body-p1 p': t.amazonMessage,
            '.body-p1 a': t.clickHere,
            '.foot-panel1': t.backToTop,
            '.nav-cart .cart-text': t.cart,
            // ... (add other selectors and their corresponding translations)
        };

        Object.entries(elements).forEach(([selector, text]) => {
            const element = document.querySelector(selector);
            if (element) {
                if (selector === '.search-input') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        });

        // Update panel options
        const panelOps = document.querySelectorAll('.panel-ops p');
        if (panelOps.length === 5) {
            panelOps[0].textContent = t.todaysDeals;
            panelOps[1].textContent = t.customerService;
            panelOps[2].textContent = t.registry;
            panelOps[3].textContent = t.giftCards;
            panelOps[4].textContent = t.sell;
        }

        // ... (update other elements as needed)

        console.log(`Language changed to: ${language}`);
    }

    // Function to handle language change
    function handleLanguageChange(event) {
        const selectedLanguage = event.target.value;
        updateLanguage(selectedLanguage);
    }

    // Function to initialize language-related functionality
    function initializeLanguage() {
        const languageSelect = document.querySelector('.region-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', handleLanguageChange);
            // Set initial language to English
            updateLanguage('EN');
        }
    }

    // Check if the header is already loaded
    if (document.querySelector('.navbar')) {
        initializeLanguage();
    } else {
        // If the header is not loaded yet, wait for it
        const observer = new MutationObserver((mutations, obs) => {
            if (document.querySelector('.navbar')) {
                initializeLanguage();
                obs.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Function to scroll back to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add event listener to the "Back to top" button
    const backToTopButton = document.querySelector('.foot-panel1');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }

    // Address functionality
    const addressElement = document.querySelector('.nav-address');
    const modal = document.getElementById('address-modal');

    if (addressElement && modal) {
        const closeBtn = modal.querySelector('.close');
        const addressContent = document.getElementById('address-content');
        const signinContent = document.getElementById('signin-content');

        let isSignedIn = false; // This should be updated based on your authentication logic
        let savedAddresses = []; // This should be populated with the user's saved addresses

        const indianStates = {
            "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
            "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Namsai", "Tezu"],
            "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
            "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
            "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
            "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
            "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
            "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar"],
            "Himachal Pradesh": ["Shimla", "Mandi", "Solan", "Dharamshala", "Kullu"],
            "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
            "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
            "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
            "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
            "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
            "Manipur": ["Imphal", "Thoubal", "Kakching", "Ukhrul", "Churachandpur"],
            "Meghalaya": ["Shillong", "Tura", "Nongstoin", "Jowai", "Baghmara"],
            "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib"],
            "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"],
            "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
            "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
            "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
            "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Rangpo"],
            "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
            "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
            "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"],
            "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
            "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur"],
            "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
        };

        addressElement.addEventListener('click', function() {
            if (isSignedIn) {
                showAddressContent();
            } else {
                showSignInContent();
            }
            modal.style.display = 'block';
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

        function showSignInContent() {
            if (signinContent && addressContent) {
                signinContent.style.display = 'block';
                addressContent.style.display = 'none';
            }
        }

        function showAddressContent() {
            if (signinContent && addressContent) {
                signinContent.style.display = 'none';
                addressContent.style.display = 'block';
                displaySavedAddresses();
            }
        }

        function displaySavedAddresses() {
            const savedAddressesContainer = document.getElementById('saved-addresses');
            savedAddressesContainer.innerHTML = '';
            savedAddresses.forEach((address, index) => {
                const addressElement = document.createElement('div');
                addressElement.textContent = `${address.city}, ${address.pincode}`;
                addressElement.addEventListener('click', () => selectAddress(index));
                savedAddressesContainer.appendChild(addressElement);
            });
        }

        function selectAddress(index) {
            const selectedAddress = savedAddresses[index];
            document.querySelector('.address-p2').textContent = `${selectedAddress.city}, ${selectedAddress.pincode}`;
            modal.style.display = 'none';
        }

        const addAddressBtn = document.getElementById('add-address-btn');
        const newAddressForm = document.getElementById('new-address-form');
        const saveAddressBtn = document.getElementById('save-address-btn');

        addAddressBtn.addEventListener('click', function() {
            newAddressForm.style.display = 'block';
            this.style.display = 'none';
        });

        const stateSelect = document.getElementById('state');
        const citySelect = document.getElementById('city');

        // Populate state dropdown
        for (let state in indianStates) {
            let option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        }

        // Handle state selection
        stateSelect.addEventListener('change', function() {
            citySelect.innerHTML = '<option value="">Select City</option>';
            citySelect.disabled = true;

            if (this.value) {
                indianStates[this.value].forEach(function(city) {
                    let option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
                citySelect.disabled = false;
            }
        });

        saveAddressBtn.addEventListener('click', function() {
            const state = document.getElementById('state').value;
            const city = document.getElementById('city').value;
            const pincode = document.getElementById('pincode').value;
            const street = document.getElementById('street').value;
            const houseNo = document.getElementById('house-no').value;

            if (state && city && pincode && street && houseNo) {
                const newAddress = { state, city, pincode, street, houseNo };
                savedAddresses.push(newAddress);
                displaySavedAddresses();
                newAddressForm.style.display = 'none';
                addAddressBtn.style.display = 'block';
                document.querySelector('.address-p2').textContent = `${city}, ${pincode}`;
                // Clear form fields
                document.getElementById('state').value = '';
                document.getElementById('city').value = '';
                document.getElementById('city').disabled = true;
                document.getElementById('pincode').value = '';
                document.getElementById('street').value = '';
                document.getElementById('house-no').value = '';
            } else {
                alert('Please fill in all address fields.');
            }
        });

        // Handle sign-in form submission
        const signinForm = document.getElementById('signin-form');
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;
            // Here you would typically send the login credentials to a server for authentication
            console.log('Sign-in attempt:', email, password);
            // For this example, we'll just set isSignedIn to true
            isSignedIn = true;
            showAddressContent();
        });

    } else {
        console.log('Address modal elements not found. Skipping address functionality.');
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        }
    }

    // Call this function when the DOM is loaded
    document.addEventListener('DOMContentLoaded', initMobileMenu);

    // Add this to your existing Index.js file
    const navSignin = document.querySelector('.nav-signin');
    const signinDropdown = document.querySelector('.signin-dropdown');

    navSignin.addEventListener('mouseenter', function() {
        signinDropdown.style.display = 'block';
    });

    navSignin.addEventListener('mouseleave', function() {
        signinDropdown.style.display = 'none';
    });

    // Add these functions to your existing Index.js file
    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        }
    }

    function initSigninDropdown() {
        const navSignin = document.querySelector('.nav-signin');
        const signinDropdown = document.querySelector('.signin-dropdown');

        if (navSignin && signinDropdown) {
            navSignin.addEventListener('mouseenter', () => {
                signinDropdown.style.display = 'block';
            });

            navSignin.addEventListener('mouseleave', () => {
                signinDropdown.style.display = 'none';
            });
        }
    }

    // Call these functions when the DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        initMobileMenu();
        initSigninDropdown();
    });
});