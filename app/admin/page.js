"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Unlock,
  Users,
  Briefcase,
  DollarSign,
  TrendingUp,
  Search,
  Download,
  RefreshCw,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  Trash2,
  Star,
  ExternalLink,
  ArrowUpRight,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Plus
} from "lucide-react";
import styles from "./Admin.module.css";

const ADMIN_PIN = "prabas2025";

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [pinError, setPinError] = useState("");

  const [activeTab, setActiveTab] = useState("contacts");
  const [contacts, setContacts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [contactFilter, setContactFilter] = useState("all");
  const [appFilter, setAppFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Check stored unlock state
  useEffect(() => {
    const isUnlocked = localStorage.getItem("prabas_admin_auth");
    if (isUnlocked === "true") {
      setUnlocked(true);
      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN) {
      setUnlocked(true);
      localStorage.setItem("prabas_admin_auth", "true");
      setPinError("");
      fetchData();
    } else {
      setPinError("Invalid Admin Passcode. Try again.");
    }
  };

  const handleLock = () => {
    setUnlocked(false);
    localStorage.removeItem("prabas_admin_auth");
    setPinInput("");
  };

  const fetchData = async () => {
    setRefreshing(true);
    try {
      const [contactsRes, appsRes] = await Promise.all([
        fetch("/api/contacts"),
        fetch("/api/applications"),
      ]);
      const contactsData = await contactsRes.json();
      const appsData = await appsRes.json();

      if (contactsData.success) setContacts(contactsData.contacts || []);
      if (appsData.success) setApplications(appsData.applications || []);
    } catch (err) {
      console.error("Failed to fetch admin data:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Contacts handlers
  const handleContactStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setContacts((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
        );
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleContactNoteChange = async (id, noteText) => {
    try {
      await fetch(`/api/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: noteText }),
      });
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, notes: noteText } : c))
      );
    } catch (err) {
      console.error("Failed to save note", err);
    }
  };

  const handleDeleteContact = async (id, name) => {
    if (!confirm(`Are you sure you want to delete inquiry from "${name}"?`)) return;
    try {
      const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete contact", err);
    }
  };

  // Applications handlers
  const handleAppStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setApplications((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
        );
      }
    } catch (err) {
      console.error("Failed to update application status", err);
    }
  };

  const handleAppRatingChange = async (id, rating) => {
    try {
      await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating }),
      });
      setApplications((prev) =>
        prev.map((a) => (a.id === id ? { ...a, rating } : a))
      );
    } catch (err) {
      console.error("Failed to update rating", err);
    }
  };

  const handleAppNoteChange = async (id, internalNotes) => {
    try {
      await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ internalNotes }),
      });
      setApplications((prev) =>
        prev.map((a) => (a.id === id ? { ...a, internalNotes } : a))
      );
    } catch (err) {
      console.error("Failed to save application note", err);
    }
  };

  const handleDeleteApp = async (id, name) => {
    if (!confirm(`Delete application for "${name}"?`)) return;
    try {
      const res = await fetch(`/api/applications/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setApplications((prev) => prev.filter((a) => a.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete application", err);
    }
  };

  // Export CSV
  const exportContactsCSV = () => {
    const headers = ["ID", "Name", "Email", "Phone", "Service", "Message", "Status", "Notes", "Date"];
    const rows = contacts.map((c) => [
      `"${c.id}"`,
      `"${c.name}"`,
      `"${c.email}"`,
      `"${c.phone}"`,
      `"${c.service}"`,
      `"${(c.message || "").replace(/"/g, '""')}"`,
      `"${c.status}"`,
      `"${(c.notes || "").replace(/"/g, '""')}"`,
      `"${new Date(c.createdAt).toLocaleString()}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `prabas_contacts_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportApplicationsCSV = () => {
    const headers = ["ID", "Role", "Name", "Email", "Phone", "Experience", "Skills", "Portfolio", "Status", "Rating", "Notes", "AppliedDate"];
    const rows = applications.map((a) => [
      `"${a.id}"`,
      `"${a.role}"`,
      `"${a.fullName}"`,
      `"${a.email}"`,
      `"${a.phone}"`,
      `"${a.experience}"`,
      `"${(a.skills || "").replace(/"/g, '""')}"`,
      `"${a.portfolio || ""}"`,
      `"${a.status}"`,
      `"${a.rating || 0}"`,
      `"${(a.internalNotes || "").replace(/"/g, '""')}"`,
      `"${new Date(a.appliedAt).toLocaleString()}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `prabas_applications_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // KPI Calculations
  const totalContacts = contacts.length;
  const newContactsCount = contacts.filter((c) => c.status === "new").length;
  const inDiscussionCount = contacts.filter((c) => c.status === "in_discussion" || c.status === "contacted").length;
  const closedWonCount = contacts.filter((c) => c.status === "closed_won").length;

  const totalApps = applications.length;
  const pendingAppsCount = applications.filter((a) => a.status === "applied" || a.status === "reviewing").length;

  // Approximate pipeline value calculated from services
  const pipelineValue = contacts.reduce((acc, curr) => {
    if (curr.service.includes("14,999")) return acc + 14999;
    if (curr.service.includes("29,999")) return acc + 29999;
    if (curr.service.includes("7,999")) return acc + 7999;
    if (curr.service.includes("12,999")) return acc + 12999;
    if (curr.service.includes("19,999")) return acc + 19999;
    if (curr.service.includes("4,999")) return acc + 4999;
    if (curr.service.includes("9,999")) return acc + 9999;
    return acc + 15000;
  }, 0);

  // Filtered lists
  const filteredContacts = contacts.filter((c) => {
    if (contactFilter !== "all" && c.status !== contactFilter) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.phone?.includes(q) ||
      c.service?.toLowerCase().includes(q) ||
      c.message?.toLowerCase().includes(q)
    );
  });

  const filteredApplications = applications.filter((a) => {
    if (appFilter !== "all" && a.status !== appFilter && a.role !== appFilter) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      a.fullName?.toLowerCase().includes(q) ||
      a.email?.toLowerCase().includes(q) ||
      a.phone?.includes(q) ||
      a.role?.toLowerCase().includes(q) ||
      a.skills?.toLowerCase().includes(q) ||
      a.resumeNote?.toLowerCase().includes(q)
    );
  });

  // Services demand breakdown
  const serviceStats = contacts.reduce((acc, c) => {
    const sName = c.service.split("(")[0].trim() || "Other";
    acc[sName] = (acc[sName] || 0) + 1;
    return acc;
  }, {});

  // Passcode Lock View
  if (!unlocked) {
    return (
      <main className={styles.adminWrapper}>
        <div className={styles.lockScreen}>
          <motion.div
            className={styles.lockCard}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.lockIconWrap}>
              <Lock size={30} />
            </div>
            <h1 className={styles.lockTitle}>Admin Portal</h1>
            <p className={styles.lockSubtitle}>
              Enter your secure master passcode to access client inquiries, talent applications, and pipeline metrics.
            </p>

            <form onSubmit={handleUnlock} className={styles.lockForm}>
              <div className={styles.pinInputWrapper}>
                <input
                  type={showPin ? "text" : "password"}
                  placeholder="Enter Passcode..."
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className={styles.pinInput}
                  autoFocus
                />
                <button
                  type="button"
                  className={styles.pinToggleBtn}
                  onClick={() => setShowPin(!showPin)}
                >
                  {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {pinError && (
                <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "-4px" }}>
                  ⚠️ {pinError}
                </p>
              )}

              <button type="submit" className={styles.lockBtn}>
                Unlock Dashboard &rarr;
              </button>
            </form>

            <p className={styles.hintText}>
              Default Security PIN: <code>prabas2025</code>
            </p>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.adminWrapper}>
      <div className={styles.container}>
        {/* Top Nav Header */}
        <header className={styles.topNav}>
          <div className={styles.headerLeft}>
            <h1 className={styles.adminTitle}>
              PraBaS <span className="text-gradient">Console</span>
            </h1>
            <span className={styles.badgeLive}>
              <span className={styles.liveDot}></span> Live System
            </span>
          </div>

          <div className={styles.headerActions}>
            <button
              className={styles.btnSecondary}
              onClick={fetchData}
              disabled={refreshing}
            >
              <RefreshCw
                size={16}
                className={refreshing ? "animate-spin" : ""}
              />
              {refreshing ? "Syncing..." : "Sync Data"}
            </button>

            <Link href="/" className={styles.btnSecondary}>
              <ArrowUpRight size={16} /> View Website
            </Link>

            <button className={styles.btnDanger} onClick={handleLock}>
              <Lock size={16} /> Lock
            </button>
          </div>
        </header>

        {/* KPI Metric Cards */}
        <section className={styles.kpiGrid}>
          <div className={styles.kpiCard} style={{ "--card-accent": "#06b6d4" }}>
            <div className={styles.kpiContent}>
              <span className={styles.kpiLabel}>Total Enquiries</span>
              <span className={styles.kpiValue}>{totalContacts}</span>
              <span className={styles.kpiSub}>
                <strong style={{ color: "#06b6d4" }}>{newContactsCount} new</strong> awaiting response
              </span>
            </div>
            <div className={styles.kpiIconWrap} style={{ color: "#06b6d4" }}>
              <Users size={22} />
            </div>
          </div>

          <div className={styles.kpiCard} style={{ "--card-accent": "#a855f7" }}>
            <div className={styles.kpiContent}>
              <span className={styles.kpiLabel}>Job Applicants</span>
              <span className={styles.kpiValue}>{totalApps}</span>
              <span className={styles.kpiSub}>
                <strong style={{ color: "#a855f7" }}>{pendingAppsCount} pending</strong> evaluation
              </span>
            </div>
            <div className={styles.kpiIconWrap} style={{ color: "#a855f7" }}>
              <Briefcase size={22} />
            </div>
          </div>

          <div className={styles.kpiCard} style={{ "--card-accent": "#10b981" }}>
            <div className={styles.kpiContent}>
              <span className={styles.kpiLabel}>Active Pipeline</span>
              <span className={styles.kpiValue}>₹{pipelineValue.toLocaleString()}</span>
              <span className={styles.kpiSub}>
                <strong style={{ color: "#10b981" }}>{inDiscussionCount} warm deals</strong> in discussion
              </span>
            </div>
            <div className={styles.kpiIconWrap} style={{ color: "#10b981" }}>
              <DollarSign size={22} />
            </div>
          </div>

          <div className={styles.kpiCard} style={{ "--card-accent": "#f59e0b" }}>
            <div className={styles.kpiContent}>
              <span className={styles.kpiLabel}>Won Deals</span>
              <span className={styles.kpiValue}>{closedWonCount}</span>
              <span className={styles.kpiSub}>
                <strong style={{ color: "#f59e0b" }}>{(totalContacts ? Math.round((closedWonCount / totalContacts) * 100) : 0)}%</strong> conversion rate
              </span>
            </div>
            <div className={styles.kpiIconWrap} style={{ color: "#f59e0b" }}>
              <TrendingUp size={22} />
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className={styles.tabsBar}>
          <button
            className={`${styles.tabBtn} ${activeTab === "contacts" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("contacts")}
          >
            <Users size={18} />
            Client Inquiries
            <span className={styles.tabBadge}>{contacts.length}</span>
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "applications" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("applications")}
          >
            <Briefcase size={18} />
            Talent Applications
            <span className={styles.tabBadge}>{applications.length}</span>
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "analytics" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("analytics")}
          >
            <BarChart3 size={18} />
            Demand & Analytics
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: CLIENT CONTACTS & INQUIRIES                            */}
        {/* ============================================================== */}
        {activeTab === "contacts" && (
          <div>
            {/* Controls Bar */}
            <div className={styles.controlsBar}>
              <div className={styles.searchWrap}>
                <Search size={16} color="var(--text-dim)" />
                <input
                  type="text"
                  placeholder="Search by name, phone, email, service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterChips}>
                {[
                  { key: "all", label: "All Statuses" },
                  { key: "new", label: "New (Unread)" },
                  { key: "contacted", label: "Contacted" },
                  { key: "in_discussion", label: "In Discussion" },
                  { key: "closed_won", label: "Won" },
                  { key: "closed_lost", label: "Lost" },
                ].map((f) => (
                  <button
                    key={f.key}
                    className={`${styles.filterChip} ${contactFilter === f.key ? styles.activeChip : ""}`}
                    onClick={() => setContactFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <button className={styles.exportBtn} onClick={exportContactsCSV}>
                <Download size={14} /> Export CSV
              </button>
            </div>

            {/* Contacts Cards */}
            {filteredContacts.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📬</div>
                <h3>No Client Enquiries Found</h3>
                <p>No contacts match your current filter or search criteria.</p>
              </div>
            ) : (
              <div className={styles.itemsGrid}>
                {filteredContacts.map((contact) => (
                  <div key={contact.id} className={styles.cardItem}>
                    <div className={styles.cardHeader}>
                      <div className={styles.nameRow}>
                        <h3 className={styles.itemName}>{contact.name}</h3>
                        <span className={styles.serviceBadge}>{contact.service}</span>
                        <span
                          className={`${styles.statusPill} ${
                            styles[`status_${contact.status}`] || styles.status_new
                          }`}
                        >
                          ● {contact.status.replace("_", " ")}
                        </span>
                      </div>

                      <div className={styles.detailItem} style={{ color: "var(--text-dim)", fontSize: "0.8rem" }}>
                        <Calendar size={14} />
                        {new Date(contact.createdAt).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    <div className={styles.cardDetails}>
                      <div className={styles.detailItem}>
                        <Phone size={14} color="#06b6d4" />
                        <span>{contact.phone}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <Mail size={14} color="#f59e0b" />
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </div>
                    </div>

                    {contact.message && (
                      <div className={styles.messageBox}>
                        <p>{contact.message}</p>
                      </div>
                    )}

                    {/* Internal Notes Row */}
                    <div className={styles.notesRow}>
                      <span style={{ fontWeight: 600, color: "var(--text-dim)" }}>Internal Note:</span>
                      <input
                        type="text"
                        defaultValue={contact.notes || ""}
                        placeholder="Add private note (e.g. follow up scheduled, budget approved)..."
                        className={styles.notesInput}
                        onBlur={(e) => handleContactNoteChange(contact.id, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleContactNoteChange(contact.id, e.currentTarget.value);
                            e.currentTarget.blur();
                          }
                        }}
                      />
                    </div>

                    {/* Card Footer Actions */}
                    <div className={styles.cardFooter}>
                      <div className={styles.footerLeft}>
                        <label style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                          Update Status:
                        </label>
                        <select
                          value={contact.status}
                          onChange={(e) => handleContactStatusChange(contact.id, e.target.value)}
                          className={styles.statusSelect}
                        >
                          <option value="new">New (Unread)</option>
                          <option value="contacted">Contacted</option>
                          <option value="in_discussion">In Discussion</option>
                          <option value="closed_won">Closed Won</option>
                          <option value="closed_lost">Closed Lost</option>
                        </select>

                        {/* Direct Outreach Buttons */}
                        {contact.phone && (
                          <a
                            href={`https://wa.me/${contact.phone.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(
                              contact.name
                            )},%20this%20is%20Prashant%20from%20PraBaS%20Digital%20regarding%20your%20inquiry.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.waBtn}
                          >
                            💬 WhatsApp
                          </a>
                        )}

                        {contact.email && (
                          <a href={`mailto:${contact.email}`} className={styles.mailBtn}>
                            <Mail size={14} /> Email
                          </a>
                        )}
                      </div>

                      <div className={styles.footerRight}>
                        <button
                          className={`${styles.iconActionBtn} ${styles.deleteBtn}`}
                          onClick={() => handleDeleteContact(contact.id, contact.name)}
                          title="Delete contact"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: JOB & TALENT APPLICATIONS                              */}
        {/* ============================================================== */}
        {activeTab === "applications" && (
          <div>
            {/* Controls Bar */}
            <div className={styles.controlsBar}>
              <div className={styles.searchWrap}>
                <Search size={16} color="var(--text-dim)" />
                <input
                  type="text"
                  placeholder="Search candidates, skills, role, experience..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterChips}>
                {[
                  { key: "all", label: "All Applicants" },
                  { key: "applied", label: "Applied" },
                  { key: "reviewing", label: "Reviewing" },
                  { key: "interview", label: "Interview" },
                  { key: "offered", label: "Offered" },
                  { key: "rejected", label: "Rejected" },
                ].map((f) => (
                  <button
                    key={f.key}
                    className={`${styles.filterChip} ${appFilter === f.key ? styles.activeChip : ""}`}
                    onClick={() => setAppFilter(f.key)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <button className={styles.exportBtn} onClick={exportApplicationsCSV}>
                <Download size={14} /> Export CSV
              </button>
            </div>

            {/* Application Cards */}
            {filteredApplications.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>💼</div>
                <h3>No Applications Found</h3>
                <p>No talent submissions match the current filter.</p>
              </div>
            ) : (
              <div className={styles.itemsGrid}>
                {filteredApplications.map((app) => (
                  <div key={app.id} className={styles.cardItem}>
                    <div className={styles.cardHeader}>
                      <div className={styles.nameRow}>
                        <h3 className={styles.itemName}>{app.fullName}</h3>
                        <span className={styles.roleBadge}>{app.role}</span>
                        <span
                          className={`${styles.statusPill} ${
                            styles[`status_${app.status}`] || styles.status_new
                          }`}
                        >
                          ● {app.status}
                        </span>
                      </div>

                      {/* Candidate Star Rating */}
                      <div className={styles.starsGroup}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            className={`${styles.starBtn} ${
                              star <= (app.rating || 0) ? styles.starActive : ""
                            }`}
                            onClick={() => handleAppRatingChange(app.id, star)}
                            title={`Rate ${star} stars`}
                          >
                            <Star size={16} fill={star <= (app.rating || 0) ? "#f59e0b" : "none"} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.cardDetails}>
                      <div className={styles.detailItem}>
                        <Briefcase size={14} color="#a855f7" />
                        <span>Exp: {app.experience}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <Mail size={14} color="#f59e0b" />
                        <a href={`mailto:${app.email}`}>{app.email}</a>
                      </div>
                      {app.phone && (
                        <div className={styles.detailItem}>
                          <Phone size={14} color="#06b6d4" />
                          <span>{app.phone}</span>
                        </div>
                      )}
                      {app.portfolio && (
                        <div className={styles.detailItem}>
                          <ExternalLink size={14} color="#10b981" />
                          <a href={app.portfolio} target="_blank" rel="noopener noreferrer">
                            Portfolio / Profile
                          </a>
                        </div>
                      )}
                      <div className={styles.detailItem} style={{ color: "var(--text-dim)" }}>
                        <Calendar size={14} />
                        {new Date(app.appliedAt).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>

                    {/* Skills pills */}
                    {app.skills && (
                      <div className={styles.skillsWrap}>
                        <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginRight: "4px" }}>
                          Skills:
                        </span>
                        {app.skills.split(",").map((s, idx) => (
                          <span key={idx} className={styles.skillTag}>
                            {s.trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Pitch / Cover Note */}
                    {app.resumeNote && (
                      <div className={styles.messageBox} style={{ borderLeftColor: "#a855f7" }}>
                        <p>{app.resumeNote}</p>
                      </div>
                    )}

                    {/* Internal Interviewer Notes */}
                    <div className={styles.notesRow}>
                      <span style={{ fontWeight: 600, color: "var(--text-dim)" }}>Interviewer Feedback:</span>
                      <input
                        type="text"
                        defaultValue={app.internalNotes || ""}
                        placeholder="Add hiring notes (e.g. passed technical screening, salary expectation ₹18 LPA)..."
                        className={styles.notesInput}
                        onBlur={(e) => handleAppNoteChange(app.id, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleAppNoteChange(app.id, e.currentTarget.value);
                            e.currentTarget.blur();
                          }
                        }}
                      />
                    </div>

                    {/* Application Footer */}
                    <div className={styles.cardFooter}>
                      <div className={styles.footerLeft}>
                        <label style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                          Hiring Stage:
                        </label>
                        <select
                          value={app.status}
                          onChange={(e) => handleAppStatusChange(app.id, e.target.value)}
                          className={styles.statusSelect}
                        >
                          <option value="applied">Applied (New)</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="interview">Interview Scheduled</option>
                          <option value="offered">Offer Extended</option>
                          <option value="rejected">Rejected</option>
                        </select>

                        {app.phone && (
                          <a
                            href={`https://wa.me/${app.phone.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(
                              app.fullName
                            )},%20this%20is%20Prashant%20from%20PraBaS%20Digital%20regarding%20your%20application%20for%20${encodeURIComponent(
                              app.role
                            )}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.waBtn}
                          >
                            💬 WhatsApp
                          </a>
                        )}

                        <a
                          href={`mailto:${app.email}?subject=${encodeURIComponent(
                            `PraBaS Digital - ${app.role} Application`
                          )}`}
                          className={styles.mailBtn}
                        >
                          <Mail size={14} /> Email
                        </a>
                      </div>

                      <div className={styles.footerRight}>
                        <button
                          className={`${styles.iconActionBtn} ${styles.deleteBtn}`}
                          onClick={() => handleDeleteApp(app.id, app.fullName)}
                          title="Delete application"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: DEMAND & ANALYTICS                                      */}
        {/* ============================================================== */}
        {activeTab === "analytics" && (
          <div className={styles.analyticsGrid}>
            <div className={styles.analyticsCard}>
              <h3 className={styles.chartTitle}>
                <TrendingUp size={18} color="#f59e0b" />
                Service Demand Distribution
              </h3>
              <div>
                {Object.entries(serviceStats).map(([svc, count]) => {
                  const pct = Math.round((count / totalContacts) * 100) || 0;
                  return (
                    <div key={svc} className={styles.meterRow}>
                      <div className={styles.meterHeader}>
                        <span>{svc}</span>
                        <strong>
                          {count} ({pct}%)
                        </strong>
                      </div>
                      <div className={styles.meterTrack}>
                        <div className={styles.meterFill} style={{ width: `${pct}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.analyticsCard}>
              <h3 className={styles.chartTitle}>
                <Briefcase size={18} color="#a855f7" />
                Talent Pipeline Breakdown
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { label: "New Unreviewed Applicants", count: applications.filter(a => a.status === "applied").length, color: "#38bdf8" },
                  { label: "In Active Review", count: applications.filter(a => a.status === "reviewing").length, color: "#c084fc" },
                  { label: "Interview Scheduled", count: applications.filter(a => a.status === "interview").length, color: "#f59e0b" },
                  { label: "Offers Extended", count: applications.filter(a => a.status === "offered").length, color: "#34d399" },
                  { label: "Archived / Passed", count: applications.filter(a => a.status === "rejected").length, color: "#ef4444" },
                ].map((item) => (
                  <div key={item.label} className={styles.meterRow}>
                    <div className={styles.meterHeader}>
                      <span>{item.label}</span>
                      <strong style={{ color: item.color }}>{item.count} candidates</strong>
                    </div>
                    <div className={styles.meterTrack}>
                      <div
                        className={styles.meterFill}
                        style={{
                          width: `${totalApps ? (item.count / totalApps) * 100 : 0}%`,
                          background: item.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
