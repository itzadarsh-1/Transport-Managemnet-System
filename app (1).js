const STORAGE_KEY = "transport.management.system.v2";

const seedData = {
  users: [
    {
      id: "admin-1",
      role: "admin",
      name: "System Admin",
      email: "admin@tms.local",
      password: "Admin@123",
      phone: "9412000001"
    },
    {
      id: "cust-1",
      role: "customer",
      name: "Aarav Rawat",
      email: "passenger@tms.local",
      password: "Passenger@123",
      phone: "9412000002"
    }
  ],
  drivers: [
    { id: "DDN-D001", name: "Mahesh Negi", email: "mahesh.negi@ddn-tms.local", phone: "9412011001", license: "UK07-2028-00124", password: "Driver@123", status: "Active" },
    { id: "DDN-D002", name: "Pooja Bisht", email: "pooja.bisht@ddn-tms.local", phone: "9412011002", license: "UK07-2027-00456", password: "Driver@123", status: "Active" },
    { id: "DDN-D003", name: "Sandeep Rana", email: "sandeep.rana@ddn-tms.local", phone: "9412011003", license: "UK07-2029-00843", password: "Driver@123", status: "Active" },
    { id: "DDN-D004", name: "Nisha Thapa", email: "nisha.thapa@ddn-tms.local", phone: "9412011004", license: "UK07-2026-00318", password: "Driver@123", status: "Active" },
    { id: "DDN-D005", name: "Arvind Gusain", email: "arvind.gusain@ddn-tms.local", phone: "9412011005", license: "UK07-2028-00991", password: "Driver@123", status: "Active" },
    { id: "DDN-D006", name: "Kiran Rawat", email: "kiran.rawat@ddn-tms.local", phone: "9412011006", license: "UK07-2027-00677", password: "Driver@123", status: "Active" },
    { id: "DDN-D007", name: "Farhan Ali", email: "farhan.ali@ddn-tms.local", phone: "9412011007", license: "UK07-2029-00212", password: "Driver@123", status: "Active" }
  ],
  vehicles: [
    { id: "DDN-V001", number: "UK-07-PA-2481", type: "Electric City Bus", capacity: 36, status: "Assigned", driverId: "DDN-D001" },
    { id: "DDN-V002", number: "UK-07-PA-6412", type: "Mini Bus", capacity: 24, status: "Assigned", driverId: "DDN-D002" },
    { id: "DDN-V003", number: "UK-07-TA-1186", type: "Shared Cab", capacity: 6, status: "Assigned", driverId: "DDN-D004" },
    { id: "DDN-V004", number: "UK-07-PA-7774", type: "City Bus", capacity: 42, status: "Assigned", driverId: "DDN-D005" },
    { id: "DDN-V005", number: "UK-07-TB-3190", type: "Airport Shuttle", capacity: 18, status: "Assigned", driverId: "DDN-D003" },
    { id: "DDN-V006", number: "UK-07-PA-5530", type: "Low Floor Bus", capacity: 40, status: "Assigned", driverId: "DDN-D006" },
    { id: "DDN-V007", number: "UK-07-TA-9021", type: "Tempo Traveller", capacity: 12, status: "Available", driverId: "" },
    { id: "DDN-V008", number: "UK-07-PA-4508", type: "Hill Route Bus", capacity: 30, status: "Maintenance", driverId: "DDN-D007" }
  ],
  routes: [
    {
      id: "DDN-R001",
      name: "ISBT to Rajpur Road Corridor",
      origin: "ISBT Dehradun",
      destination: "Rajpur Road",
      stops: "ISBT Dehradun, Transport Nagar, Prince Chowk, Dehradun Railway Station, Clock Tower, Astley Hall, Dilaram Chowk, Jakhan, Rajpur Road",
      distance: 14,
      fare: 45
    },
    {
      id: "DDN-R002",
      name: "Railway Station to Sahastradhara",
      origin: "Dehradun Railway Station",
      destination: "Sahastradhara",
      stops: "Dehradun Railway Station, Clock Tower, Survey Chowk, Raipur Road, Nalapani Chowk, IT Park, Sahastradhara Crossing, Sahastradhara",
      distance: 17,
      fare: 55
    },
    {
      id: "DDN-R003",
      name: "Jolly Grant Airport Express",
      origin: "Clock Tower",
      destination: "Jolly Grant Airport",
      stops: "Clock Tower, Prince Chowk, Rispana Bridge, Jogiwala, Doiwala, Bhaniyawala, Jolly Grant Airport",
      distance: 29,
      fare: 120
    },
    {
      id: "DDN-R004",
      name: "Prem Nagar Education Route",
      origin: "Clock Tower",
      destination: "Prem Nagar",
      stops: "Clock Tower, Bindal Bridge, Ballupur Chowk, Balliwala, Nanda Ki Chowki, Uttaranchal University, Prem Nagar",
      distance: 11,
      fare: 40
    },
    {
      id: "DDN-R005",
      name: "Clement Town to Parade Ground",
      origin: "Clement Town",
      destination: "Parade Ground",
      stops: "Clement Town, Subhash Nagar, ISBT Dehradun, Niranjanpur Mandi, Saharanpur Chowk, Prince Chowk, Parade Ground",
      distance: 13,
      fare: 45
    },
    {
      id: "DDN-R006",
      name: "Raipur Ring Service",
      origin: "Parade Ground",
      destination: "Raipur",
      stops: "Parade Ground, Survey Chowk, RTO Office, Sahastradhara Road, Nalapani Chowk, Raipur Chowk, Maldevta Road, Raipur",
      distance: 12,
      fare: 40
    },
    {
      id: "DDN-R007",
      name: "Mussoorie Foothill Link",
      origin: "Rajpur Road",
      destination: "Mussoorie Bus Stand",
      stops: "Rajpur Road, Malsi Deer Park, Pacific Mall, Kuthal Gate, Kolhu Khet, Library Chowk, Mussoorie Bus Stand",
      distance: 32,
      fare: 150
    },
    {
      id: "DDN-R008",
      name: "Kargi to Dalanwala Local",
      origin: "Kargi Chowk",
      destination: "Dalanwala",
      stops: "Kargi Chowk, Vidhan Sabha, Rispana Bridge, Dharampur, Araghar, EC Road, Dalanwala",
      distance: 10,
      fare: 35
    },
    {
      id: "DDN-R009",
      name: "Race Course to Jakhan Shuttle",
      origin: "Race Course",
      destination: "Jakhan",
      stops: "Race Course, Prince Chowk, Clock Tower, Astley Hall, Dilaram Chowk, Hathibarkala, Pacific Mall, Jakhan",
      distance: 12,
      fare: 40
    },
    {
      id: "DDN-R010",
      name: "Forest Research Institute Tourist Line",
      origin: "Dehradun Railway Station",
      destination: "Forest Research Institute",
      stops: "Dehradun Railway Station, Saharanpur Chowk, Ballupur Chowk, IMA Blood Bank, Forest Research Institute",
      distance: 8,
      fare: 35
    }
  ],
  trips: [
    { id: "DDN-T001", routeId: "DDN-R001", vehicleId: "DDN-V001", driverId: "DDN-D001", date: today(), time: "07:30", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T002", routeId: "DDN-R002", vehicleId: "DDN-V002", driverId: "DDN-D002", date: today(), time: "08:15", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T003", routeId: "DDN-R003", vehicleId: "DDN-V005", driverId: "DDN-D003", date: today(), time: "09:00", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T004", routeId: "DDN-R004", vehicleId: "DDN-V003", driverId: "DDN-D004", date: today(), time: "09:45", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T005", routeId: "DDN-R005", vehicleId: "DDN-V004", driverId: "DDN-D005", date: today(), time: "10:30", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T006", routeId: "DDN-R006", vehicleId: "DDN-V006", driverId: "DDN-D006", date: today(), time: "11:15", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T007", routeId: "DDN-R007", vehicleId: "DDN-V008", driverId: "DDN-D007", date: today(), time: "12:00", status: "Delayed", seatsBooked: 0 },
    { id: "DDN-T008", routeId: "DDN-R008", vehicleId: "DDN-V007", driverId: "DDN-D001", date: today(), time: "13:20", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T009", routeId: "DDN-R009", vehicleId: "DDN-V001", driverId: "DDN-D002", date: addDays(1), time: "08:00", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T010", routeId: "DDN-R010", vehicleId: "DDN-V002", driverId: "DDN-D003", date: addDays(1), time: "10:00", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T011", routeId: "DDN-R001", vehicleId: "DDN-V004", driverId: "DDN-D004", date: addDays(1), time: "17:30", status: "Scheduled", seatsBooked: 0 },
    { id: "DDN-T012", routeId: "DDN-R003", vehicleId: "DDN-V005", driverId: "DDN-D005", date: addDays(2), time: "06:30", status: "Scheduled", seatsBooked: 0 }
  ],
  bookings: [],
  payments: [],
  notifications: []
};

let state = loadState();
let session = JSON.parse(sessionStorage.getItem("tmsSession") || "null");
let authRole = "customer";
let customerMode = "login";
let currentView = "home";
let routeFilter = "";
let bookingDate = today();
let scheduleDate = today();
let bookingTripId = "";
let selectedTicketId = "";
let reportStartDate = today();
let reportEndDate = today();
let reportVehicleId = "";

function today() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function dateDiffDays(from, to) {
  const start = new Date(`${from}T00:00:00`);
  const end = new Date(`${to}T00:00:00`);
  return Math.round((end - start) / 86400000);
}

function ensureTripsForDate(date) {
  if (!date || state.trips.some((trip) => trip.date === date)) return;
  const offset = ((dateDiffDays(today(), date) % 3) + 3) % 3;
  const templates = seedData.trips.filter((trip) => ((dateDiffDays(today(), trip.date) % 3) + 3) % 3 === offset);
  templates.forEach((trip, index) => {
    state.trips.push({
      ...trip,
      id: `${trip.id}-${date.replace(/-/g, "").slice(4)}-${index + 1}`,
      date,
      status: "Scheduled",
      seatsBooked: 0
    });
  });
  saveState();
}

function uid(prefix) {
  return `${prefix}${Math.floor(1000 + Math.random() * 9000)}`;
}

function normalizeState(data) {
  data.vehicles?.forEach((vehicle) => {
    if (vehicle.driverId === undefined) {
      vehicle.driverId = data.trips?.find((trip) => trip.vehicleId === vehicle.id)?.driverId || "";
    }
  });
  data.bookings?.forEach((booking) => {
    if (!booking.seatNumbers) booking.seatNumbers = [];
    if (!booking.destination) booking.destination = "";
    if (!booking.pnr) booking.pnr = booking.id;
  });
  return data;
}

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = normalizeState(JSON.parse(stored));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    return parsed;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
  return normalizeState(structuredClone(seedData));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setSession(user) {
  session = user;
  sessionStorage.setItem("tmsSession", JSON.stringify(user));
  currentView = "home";
  bookingDate = today();
  scheduleDate = today();
  bookingTripId = "";
  selectedTicketId = "";
  render();
}

function clearSession() {
  session = null;
  sessionStorage.removeItem("tmsSession");
  render();
}

function routeName(id) {
  return state.routes.find((route) => route.id === id)?.name || "Not assigned";
}

function vehicleLabel(id) {
  const vehicle = state.vehicles.find((item) => item.id === id);
  return vehicle ? `${vehicle.number} (${vehicle.type})` : "Not assigned";
}

function driverLabel(id) {
  const driver = state.drivers.find((item) => item.id === id);
  return driver ? `${driver.name} (${driver.id})` : "Not assigned";
}

function customerLabel(id) {
  const user = state.users.find((item) => item.id === id);
  return user ? user.name : "Customer";
}

function money(value) {
  return `Rs. ${Number(value || 0).toLocaleString("en-IN")}`;
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = session ? dashboardTemplate() : loginTemplate();
  bindEvents();
}

function loginTemplate() {
  return `
    <main class="login-shell">
      <section class="brand-panel">
        <div>
          <h1>Transport Management System</h1>
          <p>Plan and manage city buses, airport shuttles, hill-route trips, drivers, bookings, payments, and live passenger notifications.</p>
        </div>
        <div class="role-grid">
          <div class="role-chip">Local routes</div>
          <div class="role-chip">Seat tracking</div>
          <div class="role-chip">Driver updates</div>
          <div class="role-chip scenic-chip">Airport, ISBT, Rajpur, Mussoorie</div>
        </div>
      </section>
      <section class="auth-panel">
        <div class="auth-card">
          <div class="tabs">
            ${["customer", "admin", "driver"].map((role) => `<button class="tab ${authRole === role ? `active ${role}` : ""}" data-auth-role="${role}">${title(role)}</button>`).join("")}
          </div>
          ${authRole === "customer" ? customerAuthTemplate() : roleLoginTemplate(authRole)}
          <div id="authMessage" class="message"></div>
        </div>
      </section>
    </main>
  `;
}

function title(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function customerAuthTemplate() {
  if (customerMode === "signup") {
    return `
      <div class="form-title">
        <h2>Customer Signup</h2>
        <span>Create a passenger account for bookings and schedules.</span>
      </div>
      <form class="form-grid" id="customerSignup">
        <div class="split">
          <div class="field"><label>Name</label><input name="name" required></div>
          <div class="field"><label>Phone</label><input name="phone" required></div>
        </div>
        <div class="field"><label>Email</label><input type="email" name="email" required></div>
        <div class="field"><label>Password</label><input type="password" name="password" minlength="6" required></div>
        <button class="primary" type="submit">Create Account</button>
        <span class="hint">Already registered? <button class="link-button" type="button" data-customer-mode="login">Login</button></span>
      </form>
    `;
  }

  return `
    <div class="form-title">
      <h2>Customer Login</h2>
      <span>Passenger access for transport bookings.</span>
    </div>
    <form class="form-grid" id="loginForm">
      <input type="hidden" name="role" value="customer">
      <div class="field"><label>Email</label><input type="email" name="email" required></div>
      <div class="field"><label>Password</label><input type="password" name="password" required></div>
      <button class="primary" type="submit">Login</button>
      <span class="hint">New customer? <button class="link-button" type="button" data-customer-mode="signup">Signup</button></span>
    </form>
  `;
}

function roleLoginTemplate(role) {
  const hint = role === "admin"
    ? "Use the city operations admin account."
    : "Driver ID is created by admin for assigned trips.";
  const label = role === "driver" ? "Driver ID" : "Email";
  const type = role === "driver" ? "text" : "email";

  return `
    <div class="form-title">
      <h2>${title(role)} Login</h2>
      <span>${hint}</span>
    </div>
    <form class="form-grid" id="loginForm">
      <input type="hidden" name="role" value="${role}">
      <div class="field"><label>${label}</label><input type="${type}" name="email" required></div>
      <div class="field"><label>Password</label><input type="password" name="password" required></div>
      <button class="primary" type="submit">Login</button>
    </form>
  `;
}

function dashboardTemplate() {
  const nav = navItems();
  return `
    <main class="app-shell">
      <aside class="sidebar">
        <div>
          <h2>TMS</h2>
          <div class="profile">
            <strong>${session.name}</strong>
            <span>${title(session.role)} Access</span>
          </div>
        </div>
        <nav class="nav">
          ${nav.map((item) => `<button class="${currentView === item.id ? "active" : ""}" data-view="${item.id}">${item.label}</button>`).join("")}
        </nav>
        <button class="ghost" data-action="logout">Logout</button>
      </aside>
      <section class="content">
        ${viewTemplate()}
      </section>
    </main>
  `;
}

function navItems() {
  if (session.role === "admin") {
    return [
      { id: "home", label: "Home" },
      { id: "vehicles", label: "Vehicles" },
      { id: "drivers", label: "Drivers" },
      { id: "routes", label: "Routes" },
      { id: "trips", label: "Trips" },
      { id: "bookings", label: "Bookings" },
      { id: "reports", label: "Reports" },

    ];
  }
  if (session.role === "driver") {
    return [
      { id: "home", label: "Home" },
      { id: "trips", label: "My Trips" },
      { id: "notifications", label: "Notifications" }
    ];
  }
  return [
    { id: "home", label: "Home" },
    { id: "booking", label: "Book Transport" },
    { id: "schedule", label: "Schedules" },
    { id: "myBookings", label: "My Bookings" },
    { id: "notifications", label: "Notifications" }
  ];
}

function viewTemplate() {
  if (currentView === "home") return homeView();
  if (session.role === "admin") return adminView();
  if (session.role === "driver") return driverView();
  return customerView();
}

function homeView() {
  const roleText = title(session.role);
  const todayTrips = state.trips.filter((trip) => trip.date === today());
  const roleLine = session.role === "admin"
    ? "Manage routes, vehicles, drivers, bookings, reports, and daily operations."
    : session.role === "driver"
      ? "Check assigned trips, update status, and follow booking notifications."
      : "Find available buses by date, book seats, and view your tickets.";
  const primaryAction = session.role === "admin"
    ? { id: "reports", label: "Open Reports" }
    : session.role === "driver"
      ? { id: "trips", label: "View My Trips" }
      : { id: "booking", label: "Book Transport" };

  return `
    <div class="home-hero compact-home">
      <div class="home-copy">
        <span>${roleText} Home</span>
        <h1>Transport Management System</h1>
        <p>${roleLine}</p>
        <button class="primary home-action" data-view="${primaryAction.id}">${primaryAction.label}</button>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><span>Routes</span><strong>${state.routes.length}</strong></div>
      <div class="stat"><span>Vehicles</span><strong>${state.vehicles.length}</strong></div>
      <div class="stat"><span>Trips Today</span><strong>${todayTrips.length}</strong></div>
      <div class="stat"><span>Available Seats Today</span><strong>${todayTrips.reduce((sum, trip) => sum + availableSeats(trip), 0)}</strong></div>
    </div>
    <div class="card quick-card">
      <h3>Quick Access</h3>
      <div class="quick-actions">
        ${navItems().filter((item) => item.id !== "home").slice(0, 5).map((item) => `<button class="secondary" data-view="${item.id}">${item.label}</button>`).join("")}
      </div>
    </div>
  `;
}

function pageHead(titleText, description) {
  return `
    <div class="topbar">
      <div>
        <h1>${titleText}</h1>
        <p>${description}</p>
      </div>
    </div>
  `;
}

function adminView() {
  if (currentView === "vehicles") return adminVehicles();
  if (currentView === "drivers") return adminDrivers();
  if (currentView === "routes") return adminRoutes();
  if (currentView === "trips") return adminTrips();
  if (currentView === "bookings") return adminBookings();
  if (currentView === "reports") return adminReports();
  return adminReports();
}

function adminDashboard() {
  return `
    ${pageHead("Admin Dashboard", "Manage vehicles, drivers, routes, bookings, trip status, and reports.")}
    <div class="city-hero">
      <div>
        <span>City transport network</span>
        <strong>${state.routes.length} routes across ISBT, Railway Station, Rajpur Road, Sahastradhara, Airport, Prem Nagar, Clement Town, Raipur, Jakhan, and FRI.</strong>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><span>Vehicles</span><strong>${state.vehicles.length}</strong></div>
      <div class="stat"><span>Drivers</span><strong>${state.drivers.length}</strong></div>
      <div class="stat"><span>Routes</span><strong>${state.routes.length}</strong></div>
      <div class="stat"><span>Bookings</span><strong>${state.bookings.length}</strong></div>
    </div>
    <div class="section-grid">
      <div class="card">
        <h3>Today</h3>
        <div class="list">
          <div class="list-item"><strong>${state.trips.filter((trip) => trip.date === today()).length} trips scheduled</strong><span>Live operational workload</span></div>
          <div class="list-item"><strong>${money(state.payments.reduce((sum, item) => sum + Number(item.amount || 0), 0))}</strong><span>Total payment records</span></div>
          <div class="list-item"><strong>${state.trips.filter((trip) => trip.status === "Delayed").length} delayed trips</strong><span>Needs admin attention</span></div>
        </div>
      </div>
      <div class="card">
        <h3>Recent Bookings</h3>
        ${bookingsTable(state.bookings.slice(-5).reverse())}
      </div>
    </div>
  `;
}

function adminVehicles() {
  return `
    ${pageHead("Vehicle Management", "Add, update, and remove vehicle records.")}
    <div class="section-grid">
      <form class="card form-grid" id="vehicleForm">
        <h3>Add Vehicle</h3>
        <div class="field"><label>Vehicle Number</label><input name="number" placeholder="UK-07-PA-0000" required></div>
        <div class="split">
          <div class="field"><label>Type</label><input name="type" required></div>
          <div class="field"><label>Capacity</label><input type="number" min="1" name="capacity" required></div>
        </div>
        <div class="field"><label>Status</label><select name="status"><option>Available</option><option>Assigned</option><option>Maintenance</option></select></div>
        <div class="field"><label>Assign Driver</label><select name="driverId"><option value="">No driver assigned</option>${state.drivers.map((driver) => `<option value="${driver.id}">${driver.name} - ${driver.id}</option>`).join("")}</select></div>
        <button class="primary">Add Vehicle</button>
      </form>
      <div class="card"><h3>Vehicle Database</h3>${vehiclesTable()}</div>
    </div>
  `;
}

function adminDrivers() {
  return `
    ${pageHead("Driver Management", "Admin creates driver ID and password for driver login.")}
    <div class="section-grid">
      <form class="card form-grid" id="driverForm">
        <h3>Create Driver Login</h3>
        <div class="split">
          <div class="field"><label>Name</label><input name="name" required></div>
          <div class="field"><label>Phone</label><input name="phone" required></div>
        </div>
        <div class="field"><label>Email</label><input type="email" name="email" required></div>
        <div class="field"><label>License No.</label><input name="license" required></div>
        <div class="field"><label>Password</label><input name="password" value="Driver@123" required></div>
        <button class="primary">Create Driver</button>
      </form>
      <div class="card"><h3>Driver Database</h3>${driversTable()}</div>
    </div>
  `;
}

function adminRoutes() {
  return `
    ${pageHead("Route Management", "Create routes with stops, distance, and fare.")}
    <div class="section-grid">
      <form class="card form-grid" id="routeForm">
        <h3>Add Route</h3>
        <div class="field"><label>Route Name</label><input name="name" required></div>
        <div class="split">
          <div class="field"><label>Origin</label><input name="origin" required></div>
          <div class="field"><label>Destination</label><input name="destination" required></div>
        </div>
        <div class="field"><label>Stops</label><textarea name="stops" placeholder="Clock Tower, Astley Hall, Dilaram Chowk" required></textarea></div>
        <div class="split">
          <div class="field"><label>Distance KM</label><input type="number" min="1" name="distance" required></div>
          <div class="field"><label>Fare</label><input type="number" min="1" name="fare" required></div>
        </div>
        <button class="primary">Add Route</button>
      </form>
      <div class="card"><h3>Route Database</h3>${routesTable()}</div>
    </div>
  `;
}

function adminTrips() {
  return `
    ${pageHead("Trip Scheduling", "Assign vehicle and driver to a transport route.")}
    <div class="section-grid">
      <form class="card form-grid" id="tripForm">
        <h3>Schedule Trip</h3>
        <div class="field"><label>Route</label><select name="routeId" required><option value="">Select route</option>${options(state.routes, "id", "name")}</select></div>
        <div class="field"><label>Vehicle</label><select name="vehicleId" required><option value="">Select vehicle</option>${state.vehicles.map((item) => `<option value="${item.id}">${item.number} - ${item.type}</option>`).join("")}</select></div>
        <div class="field"><label>Driver</label><select name="driverId" required><option value="">Select driver</option>${state.drivers.map((item) => `<option value="${item.id}">${item.name} - ${item.id}</option>`).join("")}</select></div>
        <div class="split">
          <div class="field"><label>Date</label><input type="date" name="date" value="${today()}" required></div>
          <div class="field"><label>Time</label><input type="time" name="time" required></div>
        </div>
        <button class="primary">Schedule Trip</button>
      </form>
      <div class="card"><h3>Trip Database</h3>${tripsTable(state.trips)}</div>
    </div>
  `;
}

function adminBookings() {
  return `
    ${pageHead("Booking Management", "Monitor customer bookings, cancellations, payments, and allocation.")}
    <div class="card">
      <h3>Booking Database</h3>
      ${bookingsTable(state.bookings)}
    </div>
  `;
}

function inDateRange(date, start, end) {
  return (!start || date >= start) && (!end || date <= end);
}

function reportTrips() {
  return state.trips.filter((trip) => inDateRange(trip.date, reportStartDate, reportEndDate) && (!reportVehicleId || trip.vehicleId === reportVehicleId));
}

function reportBookings() {
  const tripIds = new Set(reportTrips().map((trip) => trip.id));
  return state.bookings.filter((booking) => tripIds.has(booking.tripId));
}

function reportPayments(bookings = reportBookings()) {
  const bookingIds = new Set(bookings.map((booking) => booking.id));
  return state.payments.filter((payment) => bookingIds.has(payment.bookingId));
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll(`"`, `""`)}"`;
}

function downloadText(filename, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function ticketText(booking) {
  const trip = state.trips.find((item) => item.id === booking.tripId);
  const route = state.routes.find((item) => item.id === booking.routeId);
  return [
    "TRANSPORT MANAGEMENT SYSTEM - PASSENGER TICKET",
    `PNR: ${booking.pnr || booking.id}`,
    `Booking ID: ${booking.id}`,
    `Passenger: ${customerLabel(booking.customerId)}`,
    `Route: ${route?.name || routeName(booking.routeId)}`,
    `Date & Time: ${booking.travelDate} ${trip?.time || ""}`,
    `Vehicle: ${trip ? vehicleLabel(trip.vehicleId) : "Not assigned"}`,
    `Driver: ${trip ? driverLabel(trip.driverId) : "Not assigned"}`,
    `From: ${booking.pickup}`,
    `To: ${booking.destination || route?.destination || "Not selected"}`,
    `Seats: ${(booking.seatNumbers || []).join(", ") || booking.passengers}`,
    `Amount: ${money(booking.amount)}`,
    `Status: ${booking.status}`
  ].join("\n");
}

function downloadTicket(id) {
  const booking = state.bookings.find((item) => item.id === id && (session.role !== "customer" || item.customerId === session.id));
  if (!booking) return;
  downloadText(`ticket-${booking.pnr || booking.id}.txt`, ticketText(booking));
}

function downloadReport() {
  const bookings = reportBookings();
  const rows = [["Booking ID", "PNR", "Customer", "Route", "Travel Date", "Vehicle", "Driver", "From", "To", "Seats", "Passengers", "Amount", "Payment", "Status"]];
  bookings.forEach((booking) => {
    const trip = state.trips.find((item) => item.id === booking.tripId);
    rows.push([booking.id, booking.pnr || "", customerLabel(booking.customerId), routeName(booking.routeId), booking.travelDate || "", trip ? vehicleLabel(trip.vehicleId) : "", trip ? driverLabel(trip.driverId) : "", booking.pickup || "", booking.destination || "", (booking.seatNumbers || []).join(" "), booking.passengers, booking.amount, booking.payment, booking.status]);
  });
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const busPart = reportVehicleId ? state.vehicles.find((vehicle) => vehicle.id === reportVehicleId)?.number || reportVehicleId : "all-buses";
  downloadText(`transport-report-${reportStartDate}-to-${reportEndDate}-${busPart}.csv`, csv, "text/csv");
}

function adminReports() {
  const trips = reportTrips();
  const bookings = reportBookings();
  const payments = reportPayments(bookings);
  const paid = payments.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const completed = trips.filter((trip) => trip.status === "Completed").length;
  const scheduled = trips.filter((trip) => trip.status === "Scheduled").length;
  const delayed = trips.filter((trip) => trip.status === "Delayed").length;
  const filteredVehicles = reportVehicleId ? state.vehicles.filter((vehicle) => vehicle.id === reportVehicleId) : state.vehicles;
  return `
    ${pageHead("Reports", "Filter transport reports by date range and bus, then download the result.")}
    <div class="card report-filter">
      <div class="report-controls">
        <div class="field"><label>From Date</label><input type="date" id="reportStartDate" value="${reportStartDate}"></div>
        <div class="field"><label>To Date</label><input type="date" id="reportEndDate" value="${reportEndDate}"></div>
        <div class="field"><label>Bus</label><select id="reportVehicleId"><option value="">All buses</option>${state.vehicles.map((vehicle) => `<option value="${vehicle.id}" ${reportVehicleId === vehicle.id ? "selected" : ""}>${vehicle.number} - ${vehicle.type}</option>`).join("")}</select></div>
        <button class="primary" data-download-report>Download Report</button>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><span>Total Revenue</span><strong>${money(paid)}</strong></div>
      <div class="stat"><span>Completed Trips</span><strong>${completed}</strong></div>
      <div class="stat"><span>Scheduled Trips</span><strong>${scheduled}</strong></div>
      <div class="stat"><span>Delayed Trips</span><strong>${delayed}</strong></div>
    </div>
    <div class="section-grid">
      <div class="card">
        <h3>Bus Utilization</h3>
        <div class="list">
          ${filteredVehicles.map((vehicle) => {
            const vehicleTrips = trips.filter((trip) => trip.vehicleId === vehicle.id);
            const bookedSeats = vehicleTrips.reduce((sum, trip) => sum + (tripCapacity(trip) - availableSeats(trip)), 0);
            return `<div class="list-item"><strong>${vehicle.number}</strong><span>${vehicle.type} - ${driverLabel(vehicle.driverId)} - ${vehicleTrips.length} trips - ${bookedSeats} booked seats</span></div>`;
          }).join("") || `<div class="empty">No bus records found for this filter.</div>`}
        </div>
      </div>
      <div class="card">
        <h3>Booking Records</h3>
        ${bookingsTable(bookings)}
      </div>
    </div>
    <div class="card" style="margin-top:16px">
      <h3>Payment Records</h3>
      ${paymentsTable(payments)}
    </div>
  `;
}

function systemModels() {
  return `
    ${pageHead("DFD and SRS Coverage", "Assignment requirements represented inside the working software.")}
    <div class="card">
      <h3>Level 0 DFD</h3>
      <div class="diagram">
        <div class="diagram-box"><h4>Passenger</h4><p>Registers, logs in, books vehicle, cancels booking, checks schedule.</p></div>
        <div class="diagram-box"><h4>TMS Process</h4><p>Authenticates roles, manages bookings, assigns trips, stores records.</p></div>
        <div class="diagram-box"><h4>Database</h4><p>User, vehicle, booking, driver, payment, route, notification records.</p></div>
      </div>
    </div>
    <div class="card" style="margin-top:16px">
      <h3>Level 1 Processes</h3>
      <div class="diagram">
        <div class="diagram-box"><h4>User Management</h4><p>Customer signup/login, admin login, driver login by admin-created ID.</p></div>
        <div class="diagram-box"><h4>Booking Management</h4><p>Book route, confirm payment, cancel booking, update allocation.</p></div>
        <div class="diagram-box"><h4>Driver Management</h4><p>Create drivers, issue credentials, assign trips, update trip status.</p></div>
        <div class="diagram-box"><h4>Vehicle Management</h4><p>Add vehicles, capacity, availability, maintenance status.</p></div>
        <div class="diagram-box"><h4>Payment Management</h4><p>Fare calculation and payment records for reports.</p></div>
        <div class="diagram-box"><h4>Notification System</h4><p>Booking confirmations and driver trip updates.</p></div>
      </div>
    </div>
  `;
}

function customerView() {
  if (currentView === "booking") return customerBookingForm();
  if (currentView === "schedule") return customerSchedule();
  if (currentView === "myBookings") return customerBookings();
  if (currentView === "notifications") return notificationsView();
  return homeView();
}

function customerBookingForm() {
  const trips = availableBookingTrips();
  const trip = selectedTrip();
  const stops = trip ? routeStops(trip.routeId) : [];
  return `
    ${pageHead("Book Transport", "Select a travel date, trip, destination, and seat before confirming your booking.")}
    <div class="section-grid">
      <form class="card form-grid" id="bookingForm">
        <h3>New Booking</h3>
        <div class="field"><label>Travel Date</label><input type="date" id="bookingDate" name="travelDate" value="${bookingDate}" required></div>
        <div class="field"><label>Trip</label><select id="bookingTrip" name="tripId" required>
          <option value="">Select an available trip</option>
          ${trips.map((item) => `<option value="${item.id}" ${bookingTripId === item.id ? "selected" : ""}>${item.id} - ${routeName(item.routeId)} - ${item.time} - ${availableSeats(item)} seats</option>`).join("")}
        </select></div>
        ${trips.length ? "" : `<div class="empty">No buses are available on this date. Please choose another date.</div>`}
        <div class="split">
          <div class="field"><label>Passengers</label><input type="number" name="passengers" min="1" value="1" required></div>
          <div class="field"><label>Pickup Point</label><select name="pickup" required><option value="">Select pickup</option>${stops.map((stop) => `<option value="${stop}">${stop}</option>`).join("")}</select></div>
        </div>
        <div class="field"><label>Destination</label><select name="destination" required><option value="">Select destination</option>${stops.map((stop) => `<option value="${stop}">${stop}</option>`).join("")}</select></div>
        ${trip ? busDetailCard(trip) : ""}
        <div class="field"><label>Select Seat</label>${seatOptions(trip)}</div>
        <div class="field"><label>Payment Mode</label><select name="mode" required><option value="">Select payment mode</option><option>UPI</option><option>Card</option><option>Cash</option><option>Net Banking</option></select></div>
        <button class="primary">Confirm Booking</button>
      </form>
      <div class="card route-browser">
        <h3>Buses Available on ${bookingDate}</h3>
        <div class="field compact"><label>Search route or stop</label><input id="routeSearch" value="${routeFilter}" placeholder="Try Rajpur, Airport, FRI, Sahastradhara"></div>
        <div class="list">${filteredRoutes(bookingDate).map(routeCard).join("") || `<div class="empty">No route matched your search for this date.</div>`}</div>
      </div>
    </div>
  `;
}

function customerSchedule() {
  ensureTripsForDate(scheduleDate);
  const rows = state.trips.filter((trip) => trip.date === scheduleDate);
  return `
    ${pageHead("Transport Schedule", "Choose a date to see which bus is available on that day.")}
    <div class="card schedule-filter">
      <div class="split align-end">
        <div class="field"><label>Schedule Date</label><input type="date" id="scheduleDate" value="${scheduleDate}"></div>
        <div class="filter-summary"><strong>${rows.length}</strong><span>buses found</span></div>
      </div>
    </div>
    <div class="card">
      <h3>Scheduled Trips for ${scheduleDate}</h3>
      ${tripsTable(rows, false)}
    </div>
  `;
}

function customerBookings() {
  const rows = state.bookings.filter((item) => item.customerId === session.id);
  const ticket = rows.find((item) => item.id === selectedTicketId);
  return `
    ${pageHead("My Bookings", "Confirmed and cancelled passenger bookings.")}
    ${ticketTemplate(ticket)}
    <div class="card">
      <h3>Booking History</h3>
      ${bookingsTable(rows)}
    </div>
  `;
}

function driverView() {
  if (currentView === "notifications") return notificationsView();
  if (currentView !== "trips") return homeView();
  ensureTripsForDate(scheduleDate);
  const rows = state.trips.filter((item) => item.driverId === session.id && item.date === scheduleDate);
  return `
    ${pageHead("Assigned Trips", "Choose a date to view and update assigned trips.")}
    <div class="card schedule-filter">
      <div class="split align-end">
        <div class="field"><label>Trip Date</label><input type="date" id="scheduleDate" value="${scheduleDate}"></div>
        <div class="filter-summary"><strong>${rows.length}</strong><span>assigned trips</span></div>
      </div>
    </div>
    <div class="card">
      <h3>My Trip Schedule for ${scheduleDate}</h3>
      ${tripsTable(rows, true)}
    </div>
  `;
}

function notificationsView() {
  const rows = state.notifications.filter((item) => item.userId === session.id);
  return `
    ${pageHead("Notifications", "Booking confirmations and trip updates.")}
    <div class="card">
      <h3>Notification Logs</h3>
      <div class="list">
        ${rows.length ? rows.map((item) => `<div class="list-item"><strong>${item.message}</strong><span>${item.date}</span></div>`).join("") : `<div class="empty">No notifications yet.</div>`}
      </div>
    </div>
  `;
}

function availableBookingTrips() {
  ensureTripsForDate(bookingDate);
  return state.trips.filter((trip) => trip.date === bookingDate && trip.status !== "Completed" && availableSeats(trip) > 0);
}

function filteredRoutes(date = null) {
  if (date) ensureTripsForDate(date);
  const query = routeFilter.trim().toLowerCase();
  const routes = date
    ? state.routes.filter((route) => state.trips.some((trip) => trip.routeId === route.id && trip.date === date && availableSeats(trip) > 0))
    : state.routes;
  if (!query) return routes;
  return routes.filter((route) => `${route.name} ${route.origin} ${route.destination} ${route.stops}`.toLowerCase().includes(query));
}

function allStops() {
  return [...new Set(state.routes.flatMap((route) => route.stops.split(",").map((stop) => stop.trim())).filter(Boolean))].sort();
}

function tripCapacity(trip) {
  return Number(state.vehicles.find((vehicle) => vehicle.id === trip.vehicleId)?.capacity || 0);
}

function availableSeats(trip) {
  const capacity = tripCapacity(trip);
  const activeBookings = state.bookings.filter((booking) => booking.tripId === trip.id && booking.status !== "Cancelled");
  const bookedFromSeats = activeBookings.reduce((sum, booking) => sum + (booking.seatNumbers?.length || 0), 0);
  const legacyBooked = activeBookings.reduce((sum, booking) => sum + (booking.seatNumbers?.length ? 0 : Number(booking.passengers || 0)), 0);
  return Math.max(0, capacity - bookedFromSeats - legacyBooked);
}


function routeStops(routeId) {
  const route = state.routes.find((item) => item.id === routeId);
  return route ? route.stops.split(",").map((stop) => stop.trim()).filter(Boolean) : [];
}

function bookedSeatNumbers(tripId) {
  return state.bookings
    .filter((booking) => booking.tripId === tripId && booking.status !== "Cancelled")
    .flatMap((booking) => booking.seatNumbers || []);
}

function generatedBookedSeats(trip) {
  return state.bookings
    .filter((booking) => booking.tripId === trip.id && booking.status !== "Cancelled" && !(booking.seatNumbers || []).length)
    .reduce((sum, booking) => sum + Number(booking.passengers || 0), 0);
}

function pnr() {
  return `TMS${Date.now().toString().slice(-6)}${Math.floor(10 + Math.random() * 90)}`;
}

function selectedTrip() {
  return state.trips.find((trip) => trip.id === bookingTripId) || null;
}

function busDetailCard(trip) {
  const activeBookings = state.bookings.filter((booking) => booking.tripId === trip.id && booking.status !== "Cancelled");
  const booked = tripCapacity(trip) - availableSeats(trip);
  return `
    <div class="bus-detail">
      <strong>${vehicleLabel(trip.vehicleId)}</strong>
      <span>Driver: ${driverLabel(trip.driverId)}</span>
      <span>Bookings: ${activeBookings.length} | Seats booked: ${booked} | Seats available: ${availableSeats(trip)}</span>
    </div>
  `;
}

function seatOptions(trip) {
  if (!trip) return `<div class="empty">Select a trip to choose seats.</div>`;
  const capacity = tripCapacity(trip);
  const booked = new Set(bookedSeatNumbers(trip.id));
  const legacyBooked = generatedBookedSeats(trip);
  return `
    <div class="seat-map">
      ${Array.from({ length: capacity }, (_, index) => {
        const seat = `S${index + 1}`;
        const unavailable = index < legacyBooked || booked.has(seat);
        return `<label class="seat ${unavailable ? "booked" : ""}"><input type="checkbox" name="seatNumbers" value="${seat}" ${unavailable ? "disabled" : ""}><span>${seat}</span></label>`;
      }).join("")}
    </div>
  `;
}

function ticketTemplate(booking) {
  if (!booking) return "";
  const trip = state.trips.find((item) => item.id === booking.tripId);
  const route = state.routes.find((item) => item.id === booking.routeId);
  return `
    <div class="ticket-card">
      <div class="ticket-head">
        <div>
          <span>Passenger Ticket</span>
          <h3>${booking.pnr || booking.id}</h3>
        </div>
        <div class="ticket-actions">${badge(booking.status)}<button class="mini light" data-download-ticket="${booking.id}">Download Ticket</button></div>
      </div>
      <div class="ticket-grid">
        <div><span>Passenger</span><strong>${customerLabel(booking.customerId)}</strong></div>
        <div><span>Booking ID</span><strong>${booking.id}</strong></div>
        <div><span>Route</span><strong>${route?.name || routeName(booking.routeId)}</strong></div>
        <div><span>Date & Time</span><strong>${booking.travelDate} ${trip?.time || ""}</strong></div>
        <div><span>Vehicle</span><strong>${trip ? vehicleLabel(trip.vehicleId) : "Not assigned"}</strong></div>
        <div><span>Driver</span><strong>${trip ? driverLabel(trip.driverId) : "Not assigned"}</strong></div>
        <div><span>From</span><strong>${booking.pickup}</strong></div>
        <div><span>To</span><strong>${booking.destination || route?.destination || "Not selected"}</strong></div>
        <div><span>Seats</span><strong>${(booking.seatNumbers || []).join(", ") || booking.passengers}</strong></div>
        <div><span>Amount</span><strong>${money(booking.amount)}</strong></div>
      </div>
    </div>
  `;
}
function routeCard(route) {
  const routeTrips = state.trips.filter((trip) => trip.routeId === route.id && (!bookingDate || trip.date === bookingDate) && availableSeats(trip) > 0);
  return `
    <div class="list-item">
      <strong>${route.name} - ${money(route.fare)}</strong>
      <span>${route.origin} to ${route.destination}, ${route.distance} km</span>
      <em>${routeTrips.length} buses available</em>
      <div class="route-services">
        ${routeTrips.map((trip) => `<div class="service-pill"><b>${trip.time}</b><span>${vehicleLabel(trip.vehicleId)}</span><small>${availableSeats(trip)} seats</small></div>`).join("")}
      </div>
      <div class="route-line" style="margin-top:12px">
        ${route.stops.split(",").map((stop) => `<div class="route-step">${stop.trim()}</div>`).join("")}
      </div>
    </div>
  `;
}

function options(items, valueKey, labelKey) {
  return items.map((item) => `<option value="${item[valueKey]}">${item[labelKey]}</option>`).join("");
}

function vehiclesTable() {
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>ID</th><th>Number</th><th>Type</th><th>Capacity</th><th>Driver</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${state.vehicles.map((item) => `<tr><td>${item.id}</td><td>${item.number}</td><td>${item.type}</td><td>${item.capacity}</td><td><select class="mini-select" data-assign-driver="${item.id}"><option value="">No driver</option>${state.drivers.map((driver) => `<option value="${driver.id}" ${item.driverId === driver.id ? "selected" : ""}>${driver.name}</option>`).join("")}</select></td><td>${badge(item.status)}</td><td><button class="mini danger" data-delete="vehicle" data-id="${item.id}">Delete</button></td></tr>`).join("")}</tbody>
    </table></div>
  `;
}

function driversTable() {
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>License</th><th>Password</th><th>Action</th></tr></thead>
      <tbody>${state.drivers.map((item) => `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.email}</td><td>${item.phone}</td><td>${item.license}</td><td>${item.password}</td><td><button class="mini danger" data-delete="driver" data-id="${item.id}">Delete</button></td></tr>`).join("")}</tbody>
    </table></div>
  `;
}

function routesTable() {
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>ID</th><th>Name</th><th>Origin</th><th>Destination</th><th>Distance</th><th>Fare</th><th>Action</th></tr></thead>
      <tbody>${state.routes.map((item) => `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.origin}</td><td>${item.destination}</td><td>${item.distance} km</td><td>${money(item.fare)}</td><td><button class="mini danger" data-delete="route" data-id="${item.id}">Delete</button></td></tr>`).join("")}</tbody>
    </table></div>
  `;
}

function tripsTable(rows, editable = session?.role === "admin") {
  if (!rows.length) return `<div class="empty">No trip records available.</div>`;
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>ID</th><th>Route</th><th>Vehicle</th><th>Driver</th><th>Date</th><th>Time</th><th>Seats</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${rows.map((item) => `<tr>
        <td>${item.id}</td>
        <td>${routeName(item.routeId)}</td>
        <td>${vehicleLabel(item.vehicleId)}</td>
        <td>${driverLabel(item.driverId)}</td>
        <td>${item.date}</td>
        <td>${item.time}</td>
        <td>${availableSeats(item)} / ${tripCapacity(item)}</td>
        <td>${badge(item.status)}</td>
        <td>${editable ? statusButtons(item.id) : "View only"}</td>
      </tr>`).join("")}</tbody>
    </table></div>
  `;
}

function bookingsTable(rows) {
  const visibleRows = session.role === "customer" ? rows.filter((item) => item.customerId === session.id) : rows;
  if (!visibleRows.length) return `<div class="empty">No booking records available.</div>`;
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>ID</th><th>Customer</th><th>Route</th><th>Date</th><th>From</th><th>To</th><th>Seats</th><th>Payment</th><th>Status</th><th>Amount</th><th>Action</th></tr></thead>
      <tbody>${visibleRows.map((item) => `<tr>
        <td>${item.id}</td>
        <td>${customerLabel(item.customerId)}</td>
        <td>${routeName(item.routeId)}</td>
        <td>${item.travelDate || "-"}</td>
        <td>${item.pickup}</td>
        <td>${item.destination || "-"}</td>
        <td>${(item.seatNumbers || []).join(", ") || item.passengers}</td>
        <td>${badge(item.payment)}</td>
        <td>${badge(item.status)}</td>
        <td>${money(item.amount)}</td>
        <td><div class="actions">${session.role === "customer" && session.id === item.customerId ? `<button class="mini" data-view-ticket="${item.id}">View Ticket</button>` : ""}${item.status !== "Cancelled" && (session.role === "admin" || session.id === item.customerId) ? `<button class="mini danger" data-cancel-booking="${item.id}">Cancel</button>` : `<span class="closed-label">Closed</span>`}</div></td>
      </tr>`).join("")}</tbody>
    </table></div>
  `;
}

function paymentsTable(rows = state.payments) {
  if (!rows.length) return `<div class="empty">No payment records available.</div>`;
  return `
    <div class="table-wrap"><table>
      <thead><tr><th>ID</th><th>Booking</th><th>Amount</th><th>Mode</th><th>Status</th><th>Date</th></tr></thead>
      <tbody>${rows.map((item) => `<tr><td>${item.id}</td><td>${item.bookingId}</td><td>${money(item.amount)}</td><td>${item.mode}</td><td>${badge(item.status)}</td><td>${item.date}</td></tr>`).join("")}</tbody>
    </table></div>
  `;
}

function statusButtons(tripId) {
  return `
    <div class="actions">
      <button class="mini" data-trip-status="${tripId}" data-status="Started">Start</button>
      <button class="mini" data-trip-status="${tripId}" data-status="Completed">Complete</button>
      <button class="mini danger" data-trip-status="${tripId}" data-status="Delayed">Delay</button>
    </div>
  `;
}

function badge(value) {
  const normalized = String(value).toLowerCase();
  const cls = normalized.includes("paid") || normalized.includes("active") || normalized.includes("completed") || normalized.includes("confirmed")
    ? "ok"
    : normalized.includes("delay") || normalized.includes("scheduled") || normalized.includes("assigned")
      ? "warn"
      : normalized.includes("cancel") || normalized.includes("maintenance")
        ? "danger"
        : "";
  return `<span class="badge ${cls}">${value}</span>`;
}

function bindEvents() {
  document.querySelectorAll("[data-auth-role]").forEach((button) => {
    button.addEventListener("click", () => {
      authRole = button.dataset.authRole;
      customerMode = "login";
      render();
    });
  });

  document.querySelectorAll("[data-customer-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      customerMode = button.dataset.customerMode;
      render();
    });
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      selectedTicketId = "";
      render();
    });
  });

  document.querySelector("[data-action='logout']")?.addEventListener("click", clearSession);
  document.querySelector("[data-action='resetCityData']")?.addEventListener("click", resetCityData);
  document.querySelector("#loginForm")?.addEventListener("submit", login);
  document.querySelector("#customerSignup")?.addEventListener("submit", signup);
  document.querySelector("#vehicleForm")?.addEventListener("submit", addVehicle);
  document.querySelector("#driverForm")?.addEventListener("submit", addDriver);
  document.querySelector("#routeForm")?.addEventListener("submit", addRoute);
  document.querySelector("#tripForm")?.addEventListener("submit", addTrip);
  document.querySelector("#bookingForm")?.addEventListener("submit", addBooking);
  document.querySelector("#bookingDate")?.addEventListener("change", (event) => {
    bookingDate = event.target.value || today();
    bookingTripId = "";
    render();
  });
  document.querySelector("#scheduleDate")?.addEventListener("change", (event) => {
    scheduleDate = event.target.value || today();
    render();
  });
  document.querySelector("#routeSearch")?.addEventListener("input", (event) => {
    routeFilter = event.target.value;
    render();
    const input = document.querySelector("#routeSearch");
    input?.focus();
  });

  document.querySelector("#bookingTrip")?.addEventListener("change", (event) => {
    bookingTripId = event.target.value;
    render();
  });

  document.querySelectorAll("[data-view-ticket]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTicketId = button.dataset.viewTicket;
      render();
    });
  });
  document.querySelector("#reportStartDate")?.addEventListener("change", (event) => {
    reportStartDate = event.target.value || today();
    render();
  });
  document.querySelector("#reportEndDate")?.addEventListener("change", (event) => {
    reportEndDate = event.target.value || today();
    render();
  });
  document.querySelector("#reportVehicleId")?.addEventListener("change", (event) => {
    reportVehicleId = event.target.value;
    render();
  });
  document.querySelector("[data-download-report]")?.addEventListener("click", downloadReport);
  document.querySelectorAll("[data-download-ticket]").forEach((button) => {
    button.addEventListener("click", () => downloadTicket(button.dataset.downloadTicket));
  });
  document.querySelectorAll("[data-assign-driver]").forEach((select) => {
    select.addEventListener("change", () => assignVehicleDriver(select.dataset.assignDriver, select.value));
  });
  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteRecord(button.dataset.delete, button.dataset.id));
  });

  document.querySelectorAll("[data-trip-status]").forEach((button) => {
    button.addEventListener("click", () => updateTripStatus(button.dataset.tripStatus, button.dataset.status));
  });

  document.querySelectorAll("[data-cancel-booking]").forEach((button) => {
    button.addEventListener("click", () => cancelBooking(button.dataset.cancelBooking));
  });
}

function formValues(event) {
  event.preventDefault();
  return Object.fromEntries(new FormData(event.target).entries());
}

function showAuth(message, type = "error") {
  const box = document.querySelector("#authMessage");
  box.className = `message show ${type}`;
  box.textContent = message;
}

function login(event) {
  const data = formValues(event);
  let user = null;
  if (data.role === "driver") {
    user = state.drivers.find((driver) => driver.id === data.email && driver.password === data.password);
    if (user) user = { ...user, role: "driver" };
  } else {
    user = state.users.find((item) => item.role === data.role && item.email === data.email && item.password === data.password);
  }

  if (!user) {
    showAuth("Invalid credentials.");
    return;
  }
  setSession(user);
}

function signup(event) {
  const data = formValues(event);
  if (state.users.some((user) => user.email === data.email)) {
    showAuth("Email already exists.");
    return;
  }
  const user = { id: uid("CUST"), role: "customer", ...data };
  state.users.push(user);
  saveState();
  alert("Account created successfully. Please login to continue.");
  customerMode = "login";
  render();
}

function assignVehicleDriver(vehicleId, driverId) {
  const vehicle = state.vehicles.find((item) => item.id === vehicleId);
  if (!vehicle) return;
  vehicle.driverId = driverId;
  vehicle.status = driverId ? "Assigned" : "Available";
  saveState();
  render();
}

function addVehicle(event) {
  const data = formValues(event);
  state.vehicles.push({ id: uid("VH"), ...data, capacity: Number(data.capacity), driverId: data.driverId || "" });
  saveState();
  render();
}

function addDriver(event) {
  const data = formValues(event);
  state.drivers.push({ id: uid("DRV"), status: "Active", ...data });
  saveState();
  render();
}

function addRoute(event) {
  const data = formValues(event);
  state.routes.push({ id: uid("RT"), ...data, distance: Number(data.distance), fare: Number(data.fare) });
  saveState();
  render();
}

function addTrip(event) {
  const data = formValues(event);
  state.trips.push({ id: uid("TR"), ...data, status: "Scheduled", seatsBooked: 0 });
  const vehicle = state.vehicles.find((item) => item.id === data.vehicleId);
  if (vehicle) {
    vehicle.status = "Assigned";
    vehicle.driverId = data.driverId;
  }
  state.notifications.push({
    id: uid("NT"),
    userId: data.driverId,
    message: `Trip assigned for ${routeName(data.routeId)} on ${data.date} at ${data.time}.`,
    date: today(),
    read: false
  });
  saveState();
  render();
}

function addBooking(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const data = Object.fromEntries(form.entries());
  const seatNumbers = form.getAll("seatNumbers");
  const trip = state.trips.find((item) => item.id === data.tripId);
  if (!trip) {
    alert("Please select a trip before confirming your booking.");
    return;
  }
  const route = state.routes.find((item) => item.id === trip.routeId);
  const passengers = Number(data.passengers);
  if (!data.pickup || !data.destination) {
    alert("Please select both pickup point and destination.");
    return;
  }
  if (data.pickup === data.destination) {
    alert("Pickup point and destination cannot be the same.");
    return;
  }
  if (seatNumbers.length !== passengers) {
    alert(`Please select exactly ${passengers} seat${passengers > 1 ? "s" : ""}.`);
    return;
  }
  const alreadyBooked = new Set(bookedSeatNumbers(trip.id));
  if (seatNumbers.some((seat) => alreadyBooked.has(seat))) {
    alert("One or more selected seats were just booked. Please choose another seat.");
    render();
    return;
  }
  if (passengers > availableSeats(trip)) {
    alert(`Only ${availableSeats(trip)} seats are available on this trip.`);
    return;
  }
  const booking = {
    id: uid("BK"),
    pnr: pnr(),
    customerId: session.id,
    routeId: trip.routeId,
    tripId: trip.id,
    passengers,
    seatNumbers,
    travelDate: trip.date,
    pickup: data.pickup,
    destination: data.destination,
    payment: "Paid",
    status: "Confirmed",
    amount: Number(route.fare) * passengers
  };
  trip.seatsBooked = Number(trip.seatsBooked || 0) + passengers;
  state.bookings.push(booking);
  state.payments.push({ id: uid("PAY"), bookingId: booking.id, amount: booking.amount, mode: data.mode, status: "Paid", date: today() });
  state.notifications.push({ id: uid("NT"), userId: session.id, message: `Booking ${booking.id} confirmed for ${route.name}.`, date: today(), read: false });
  state.notifications.push({ id: uid("NT"), userId: trip.driverId, message: `${passengers} passenger booking added for trip ${trip.id}.`, date: today(), read: false });
  saveState();
  selectedTicketId = "";
  bookingTripId = "";
  currentView = "myBookings";
  render();
}

function updateTripStatus(tripId, status) {
  const trip = state.trips.find((item) => item.id === tripId);
  if (!trip) return;
  trip.status = status;
  state.bookings
    .filter((booking) => booking.tripId === tripId)
    .forEach((booking) => {
      state.notifications.push({
        id: uid("NT"),
        userId: booking.customerId,
        message: `Trip ${tripId} status updated to ${status}.`,
        date: today(),
        read: false
      });
    });
  saveState();
  render();
}

function cancelBooking(id) {
  const booking = state.bookings.find((item) => item.id === id);
  if (!booking) return;
  if (!confirm("Are you sure you want to cancel this booking?")) return;
  booking.status = "Cancelled";
  booking.payment = "Refund Pending";
  state.notifications.push({ id: uid("NT"), userId: booking.customerId, message: `Booking ${booking.id} has been cancelled.`, date: today(), read: false });
  saveState();
  render();
}

function deleteRecord(type, id) {
  const map = {
    vehicle: "vehicles",
    driver: "drivers",
    route: "routes"
  };
  state[map[type]] = state[map[type]].filter((item) => item.id !== id);
  saveState();
  render();
}

function resetCityData() {
  state = structuredClone(seedData);
  saveState();
  if (session?.role === "driver") {
    session = { ...state.drivers[0], role: "driver" };
  } else if (session?.role === "customer") {
    session = state.users.find((item) => item.role === "customer");
  } else {
    session = state.users.find((item) => item.role === "admin");
  }
  currentView = "home";
  bookingDate = today();
  scheduleDate = today();
  bookingTripId = "";
  selectedTicketId = "";
  sessionStorage.setItem("tmsSession", JSON.stringify(session));
  render();
}

render();












