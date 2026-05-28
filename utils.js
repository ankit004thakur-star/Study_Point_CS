// ==================== UTILITY FUNCTIONS ====================

/**
 * Debounce function to prevent rapid function calls
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Throttle function to limit function call frequency
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Deep copy an object
 */
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Get element position relative to viewport
 */
function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height
    };
}

/**
 * Add class with animation
 */
function addClassWithAnimation(element, className, duration = 300) {
    element.classList.add(className);
    return new Promise(resolve => setTimeout(resolve, duration));
}

/**
 * Remove class with animation
 */
function removeClassWithAnimation(element, className, duration = 300) {
    return new Promise(resolve => {
        element.classList.remove(className);
        setTimeout(resolve, duration);
    });
}

/**
 * Get all query parameters from URL
 */
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const result = {};
    for (let [key, value] of params) {
        result[key] = value;
    }
    return result;
}

/**
 * Set query parameter in URL without page reload
 */
function setQueryParam(key, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
}

/**
 * Copy text to clipboard
 */
function copyToClipboard(text) {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        return Promise.resolve();
    }
}

/**
 * Format bytes to human readable size
 */
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return Math.round((bytes / Math.pow(k, i)) * Math.pow(10, dm)) / Math.pow(10, dm) + ' ' + sizes[i];
}

/**
 * Format date to readable string
 */
function formatDate(date, format = 'DD/MM/YYYY') {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    
    return format
        .replace('DD', day)
        .replace('MM', month)
        .replace('YYYY', year);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate URL format
 */
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Get random element from array
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * Shuffle array (Fisher-Yates algorithm)
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Find unique elements in array
 */
function getUnique(array) {
    return [...new Set(array)];
}

/**
 * Group array elements by a property
 */
function groupBy(array, key) {
    return array.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) result[groupKey] = [];
        result[groupKey].push(item);
        return result;
    }, {});
}

/**
 * Wait for a specified time (promise-based delay)
 */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retry a function with exponential backoff
 */
async function retryWithBackoff(fn, maxRetries = 3, delay = 1000) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await wait(delay * Math.pow(2, i));
        }
    }
}

/**
 * Create a unique ID
 */
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * Local storage wrapper with JSON support
 */
const StorageManager = {
    set: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },
    
    get: function(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Storage error:', e);
            return defaultValue;
        }
    },
    
    remove: function(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },
    
    clear: function() {
        try {
            localStorage.clear();
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

/**
 * Simple logger with levels
 */
const Logger = {
    log: function(message, data = null) {
        console.log(`[LOG] ${message}`, data || '');
    },
    
    warn: function(message, data = null) {
        console.warn(`[WARN] ${message}`, data || '');
    },
    
    error: function(message, data = null) {
        console.error(`[ERROR] ${message}`, data || '');
    },
    
    debug: function(message, data = null) {
        if (process.env.NODE_ENV === 'development') {
            console.debug(`[DEBUG] ${message}`, data || '');
        }
    }
};

/**
 * Request/Response helper
 */
class APIClient {
    constructor(baseURL = '') {
        this.baseURL = baseURL;
    }
    
    async request(endpoint, options = {}) {
        const url = this.baseURL + endpoint;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            Logger.error('API request failed:', error);
            throw error;
        }
    }
    
    get(endpoint, options = {}) {
        return this.request(endpoint, { method: 'GET', ...options });
    }
    
    post(endpoint, data, options = {}) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            ...options
        });
    }
    
    put(endpoint, data, options = {}) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
            ...options
        });
    }
    
    delete(endpoint, options = {}) {
        return this.request(endpoint, { method: 'DELETE', ...options });
    }
}

// ==================== EXPORT FOR USE IN MODULES ====================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        deepCopy,
        isInViewport,
        getElementPosition,
        addClassWithAnimation,
        removeClassWithAnimation,
        getQueryParams,
        setQueryParam,
        copyToClipboard,
        formatBytes,
        formatDate,
        isValidEmail,
        isValidURL,
        getRandomElement,
        shuffleArray,
        getUnique,
        groupBy,
        wait,
        retryWithBackoff,
        generateUUID,
        StorageManager,
        Logger,
        APIClient
    };
}
