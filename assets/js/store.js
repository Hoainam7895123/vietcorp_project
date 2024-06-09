const stores = {
    HaNoi: [
        { name: 'Sudes Hà Nội', address: 'Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội', hotline: '1900 6750' },
        { name: 'Sudes Hoàng Quốc Việt', address: '38 Hoàng Quốc Việt, Phường Nghĩa Tân, Quận Cầu Giấy, Hà Nội', hotline: '1900 6750' },
        { name: 'Sudes Hoàng Đạo Thúy', address: '150 Hoàng Đạo Thúy, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội', hotline: '1900 6750' },
        { name: 'Sudes Trần Phú', address: '95 Trần Phú, Phường Văn Quán, Quận Hà Đông, Hà Nội', hotline: '1900 6750' },
        { name: 'Sudes HaUI', address: 'Số 298 Đ. Cầu Diễn, Minh Khai, Bắc Từ Liêm, Hà Nội', hotline: '1900 6750' }
    ],
    HoChiMinh: [
        { name: 'Sudes Sài Gòn', address: 'Tầng 3, 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh', hotline: '1900 6750' },
    ],
    DaNang: [
        { name: 'Sudes Đà Nẵng', address: '181 đường Huỳnh Tấn Phát, Phường Hoà Cường Nam, Quận Hải Châu, TP Đà Nẵng', hotline: '1900 6750' }
    ],
    BinhDuong: [
        { name: 'Sudes Bình Dương', address: '169 / 34 Nguyễn Hữu Cảnh, Phường Phú Thọ, TP.Thủ Dầu Một, Tỉnh Bình Dương', hotline: '1900 6750' }
    ],
    CanTho: [
        { name: 'Sudes Cần Thơ', address: '81 đường Phan Huy Chú, KDC Thới Nhựt I, Phường An Khánh, Quận Ninh Kiều, Tp Cần Thơ', hotline: '1900 6750' }
    ]
};

function displayStores(city) {
    const storeList = $('#store-list');
    storeList.empty();
    if (city === 'all') {
        for (const cityStores of Object.values(stores)) {
            cityStores.forEach(store => {
                appendStore(storeList, store);
            });
        }
    } else {
        stores[city].forEach(store => {
            appendStore(storeList, store);
        });
    }
}

function appendStore(storeList, store) {
    storeList.append(`
        <div class="store-item" data-address="${store.address}">
            <strong class="item-name">${store.name}</strong><br>
            <span class="item-address">Địa chỉ: </span>${store.address}<br>
            <span class="item-hotline">Hotline: </span> ${store.hotline}
        </div>
    `);
}

$(document).ready(function () {
    $('#city').change(function () {
        const city = $(this).val();
        displayStores(city);
    });

    $('#search').on('input', function () {
        const searchQuery = $(this).val().toLowerCase();
        $('.store-item').each(function () {
            const storeName = $(this).find('strong').text().toLowerCase();
            if (storeName.includes(searchQuery)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('#store-list').on('click', '.store-item', function () {
        $('.store-item').removeClass('selected');
        $(this).addClass('selected');
        const address = $(this).data('address');
        $('#map').html(`<iframe class="rounded" src="https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed"></iframe>`);
    });

    // Initial display
    displayStores($('#city').val());
});