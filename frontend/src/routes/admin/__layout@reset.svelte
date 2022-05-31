<script lang="ts">
    import { onMount } from 'svelte';
    import '../../admin.css';

    let sideMenu: HTMLElement | null = null;
    let menuBtn: HTMLElement | null = null;
    let closeBtn: HTMLElement | null = null;
    let toggleThemeBtn: HTMLElement | null = null;
    let lightMode: HTMLElement | null = null;
    let nightMode: HTMLElement | null = null;

    onMount(() => {
        menuBtn!.addEventListener('click', () => {
            sideMenu!.style.display = 'block';
        });

        closeBtn!.addEventListener('click', () => {
            sideMenu!.style.display = 'none';
        });

        toggleThemeBtn!.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme-variables');
            lightMode!.classList.toggle('active');
            nightMode!.classList.toggle('active');
        });
    });
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
    />

    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=The+Nautigal&display=swap"
    />
</svelte:head>

<div class="container">
    <aside bind:this={sideMenu}>
        <div class="top">
            <div class="logo">
                <img src="/logo.png" alt="Tutorkami" />
                <h2>Tutorkami</h2>
            </div>
            <div class="close" id="close-btn" bind:this={closeBtn}>
                <span class="material-symbols-rounded"> close </span>
            </div>
        </div>

        <div class="sidebar">
            <a href="#" class="active">
                <span class="material-symbols-rounded"> grid_view </span>
                <h3>Dashboard</h3>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> person </span>
                <h3>Customers</h3>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> receipt_long </span>
                <h3>Orders</h3>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> insights </span>
                <h3>Analytics</h3>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> mail </span>
                <h3>Messages</h3>
                <span class="message-count">33</span>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> inventory </span>
                <h3>Products</h3>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> report </span>
                <h3>Reports</h3>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> settings </span>
                <h3>Settings</h3>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> add </span>
                <h3>Add Product</h3>
            </a>

            <a href="#">
                <span class="material-symbols-rounded"> logout </span>
                <h3>Logout</h3>
            </a>
        </div>
        <!-- End of aside-->
    </aside>

    <main>
        <h1>Dashboard</h1>

        <div class="date">
            <input type="date" title="Date" />
        </div>

        <div class="insights">
            <div class="sales">
                <span class="material-symbols-rounded"> analytics </span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Sales</h3>
                        <h1>$25,024</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36" />
                        </svg>
                        <div class="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Last 24 hours</small>
            </div>
            <!-- End of sales -->

            <div class="expenses">
                <span class="material-symbols-rounded"> bar_chart </span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Expenses</h3>
                        <h1>$14,160</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36" />
                        </svg>
                        <div class="number">
                            <p>62%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Last 24 hours</small>
            </div>
            <!-- End of expenses -->

            <div class="income">
                <span class="material-symbols-rounded">
                    stacked_line_chart
                </span>
                <div class="middle">
                    <div class="left">
                        <h3>Total Income</h3>
                        <h1>$10,864</h1>
                    </div>
                    <div class="progress">
                        <svg>
                            <circle cx="38" cy="38" r="36" />
                        </svg>
                        <div class="number">
                            <p>44%</p>
                        </div>
                    </div>
                </div>
                <small class="text-muted">Last 24 hours</small>
            </div>
            <!-- End of income -->
        </div>
        <!-- End of insights -->

        <div class="recent-orders">
            <h2>Recent Order</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Number</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Foldable Mini Drone</td>
                        <td>85631</td>
                        <td>Due</td>
                        <td class="pending">Pending</td>
                        <td class="primary">Details</td>
                    </tr>

                    <tr>
                        <td>Foldable Mini Drone</td>
                        <td>85631</td>
                        <td>Due</td>
                        <td class="pending">Pending</td>
                        <td class="primary">Details</td>
                    </tr>

                    <tr>
                        <td>Foldable Mini Drone</td>
                        <td>85631</td>
                        <td>Due</td>
                        <td class="pending">Pending</td>
                        <td class="primary">Details</td>
                    </tr>

                    <tr>
                        <td>Foldable Mini Drone</td>
                        <td>85631</td>
                        <td>Due</td>
                        <td class="pending">Pending</td>
                        <td class="primary">Details</td>
                    </tr>

                    <tr>
                        <td>Foldable Mini Drone</td>
                        <td>85631</td>
                        <td>Due</td>
                        <td class="pending">Pending</td>
                        <td class="primary">Details</td>
                    </tr>
                </tbody>
            </table>
            <a href="#">Show All</a>
        </div>
    </main>
    <!-- End of main -->

    <div class="right">
        <div class="top">
            <button id="menu-btn" bind:this={menuBtn}>
                <span class="material-symbols-rounded"> menu </span>
            </button>
            <div class="theme-toggler" bind:this={toggleThemeBtn}>
                <span
                    class="material-symbols-rounded active"
                    bind:this={lightMode}
                >
                    light_mode
                </span>
                <span class="material-symbols-rounded" bind:this={nightMode}>
                    dark_mode
                </span>
            </div>
            <div class="profile">
                <div class="info">
                    <p>Hey, <b>Daniel</b></p>
                    <small class="text-muted">Admin</small>
                </div>
                <div class="profile-photo">
                    <img src="/profile-1.jpg" alt="User" />
                </div>
            </div>
        </div>
        <!-- End of top -->

        <div class="recent-updates">
            <h2>Recent Updates</h2>
            <div class="updates">
                <div class="update">
                    <div class="profile-photo">
                        <img src="/profile-2.jpg" alt="User" />
                    </div>
                    <div class="message">
                        <p>
                            <b>Mike Tissue</b> received his order of Night lion tech
                            GPs drone.
                        </p>
                        <small class="text-muted">2 minutes ago</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="/profile-3.jpg" alt="User" />
                    </div>
                    <div class="message">
                        <p>
                            <b>Alysa Biden</b> received his order of Night lion tech
                            GPs drone.
                        </p>
                        <small class="text-muted">2 minutes ago</small>
                    </div>
                </div>

                <div class="update">
                    <div class="profile-photo">
                        <img src="/profile-4.jpg" alt="User" />
                    </div>
                    <div class="message">
                        <p>
                            <b>Sarah Arnold</b> received his order of Night lion
                            tech GPs drone.
                        </p>
                        <small class="text-muted">2 minutes ago</small>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of recent updates -->

        <div class="sales-analytics">
            <h2>Sales Analytics</h2>
            <div class="item offline">
                <div class="icon">
                    <span class="material-symbols-rounded"> local_mall </span>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>Offline Orders</h3>
                        <small class="text-muted">Last 24 hours</small>
                    </div>
                    <h5 class="danger">-17%</h5>
                    <h3>1100</h3>
                </div>
            </div>

            <div class="item online">
                <div class="icon">
                    <span class="material-symbols-rounded">
                        shopping_cart
                    </span>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>Online Orders</h3>
                        <small class="text-muted">Last 24 hours</small>
                    </div>
                    <h5 class="success">+39%</h5>
                    <h3>3489</h3>
                </div>
            </div>

            <div class="item customers">
                <div class="icon">
                    <span class="material-symbols-rounded"> person </span>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>New Customers</h3>
                        <small class="text-muted">Last 24 hours</small>
                    </div>
                    <h5 class="success">+25%</h5>
                    <h3>489</h3>
                </div>
            </div>

            <div class="item add-product">
                <div>
                    <span class="material-symbols-rounded"> add </span>
                    <h3>Add Product</h3>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- <slot /> -->
