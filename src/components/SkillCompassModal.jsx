import React, { useState, useEffect } from 'react';
import {
  X,
  Compass,
  FileText,
  Upload,
  CheckCircle2,
  Clock,
  Award,
  Trophy,
  Star,
  User,
  GraduationCap,
  Building2,
  Tag,
  Download,
  Share2,
  Copy,
  ExternalLink,
  Lock,
  Unlock,
  AlertCircle,
  Loader2,
  Sparkles,
  CreditCard,
  Printer,
  QrCode,
  ShieldCheck,
  Check,
  ChevronRight,
  TrendingUp,
  Lightbulb,
  Palette,
  MessageSquare,
  Users,
  Leaf
} from 'lucide-react';
import {
  getStudentPortfolioApi,
  saveStudentPortfolioApi,
  createRazorpayOrderApi,
  verifyRazorpayPaymentApi,
  loadRazorpayScript,
  uploadNominationDocumentApi
} from '../services/api';

export default function SkillCompassModal({ student, onClose, onUpdated }) {
  // Active internal tab: 'portfolio' | 'payment' | 'report' | 'certificate'
  const [activeTab, setActiveTab] = useState('portfolio');

  // Loading states
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [paying, setPaying] = useState(false);
  const [uploadingDoc, setUploadingDoc] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  // Toast / Alert feedback
  const [toast, setToast] = useState(null); // { type: 'success' | 'error' | 'info', title, message }
  const [copySuccess, setCopySuccess] = useState(false);

  // Student Portfolio & Additional Data State
  const [portfolio, setPortfolio] = useState({
    studentId: student?.id || '',
    studentName: student?.studentName || student?.name || '',
    class: student?.class || student?.grade || 'Grade 8',
    schoolName: student?.schoolName || 'Technik Partner School',
    category: student?.category || student?.achievementCategory || 'Academic & Innovative Excellence',
    achievementTitle: student?.achievementTitle || student?.track || '',
    approvalStatus: student?.nominationStatus || student?.status || 'Approved',
    registrationNumber: '',
    projectTitle: '',
    projectDescription: '',
    studentQuote: '',
    keyStrengths: '',
    developmentAreas: '',
    mentorRemarks: '',
    projectFile: '',
    studentPhoto: '',
    additionalFiles: [],
    achievementScore: 4.8,
    innovationScore: 4.8,
    creativityScore: 4.3,
    communicationScore: 4.3,
    leadershipScore: 4.0,
    socialImpactScore: 4.3,
    paymentStatus: 'PENDING',
    amountPaid: 0,
    razorpayKeyId: ''
  });

  const showToast = (type, title, message) => {
    setToast({ type, title, message, id: Date.now() });
    setTimeout(() => {
      setToast(prev => (prev?.title === title ? null : prev));
    }, 4500);
  };

  // Fetch student portfolio data
  useEffect(() => {
    if (!student?.id) return;
    let isMounted = true;

    async function loadPortfolio() {
      setLoading(true);
      try {
        const res = await getStudentPortfolioApi(student.id);
        if (isMounted && res && res.portfolio) {
          setPortfolio(prev => ({
            ...prev,
            ...res.portfolio,
            studentName: res.portfolio.studentName || prev.studentName,
            class: res.portfolio.class || prev.class,
            schoolName: res.portfolio.schoolName || prev.schoolName,
            category: res.portfolio.category || prev.category,
            achievementTitle: res.portfolio.achievementTitle || prev.achievementTitle,
            approvalStatus: res.portfolio.approvalStatus || prev.approvalStatus,
            registrationNumber: res.portfolio.registrationNumber || `TPA-TN-TIR-2026-${String(student.id).slice(0, 8).toUpperCase()}`,
            razorpayKeyId: res.razorpayKeyId || import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag'
          }));

          // If payment is already unlocked, default to 'report' tab
          if (res.portfolio.paymentStatus === 'PAID' || res.portfolio.paymentStatus === 'UNLOCKED') {
            setActiveTab('report');
          }
        }
      } catch (err) {
        console.error('Error fetching student portfolio:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPortfolio();
    return () => { isMounted = false; };
  }, [student]);

  // Handle Text Field Change
  const handleChange = (field, value) => {
    setPortfolio(prev => ({ ...prev, [field]: value }));
  };

  // Handle Project Document Upload
  const handleProjectFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingDoc(true);
    try {
      const res = await uploadNominationDocumentApi(file);
      if (res && res.filePath) {
        setPortfolio(prev => ({ ...prev, projectFile: res.filePath }));
        showToast('success', 'Document Uploaded', `${file.name} uploaded successfully!`);
      }
    } catch (err) {
      showToast('error', 'Upload Failed', err.message || 'File upload failed');
    } finally {
      setUploadingDoc(false);
    }
  };

  // Handle Student Photograph Upload
  const handleStudentPhotoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingPhoto(true);
    try {
      const res = await uploadNominationDocumentApi(file);
      if (res && res.filePath) {
        setPortfolio(prev => ({ ...prev, studentPhoto: res.filePath }));
        showToast('success', 'Photo Uploaded', `Photograph updated successfully!`);
      }
    } catch (err) {
      showToast('error', 'Upload Failed', err.message || 'Photo upload failed');
    } finally {
      setUploadingPhoto(false);
    }
  };

  // Save Text & File Data
  const handleSavePortfolio = async (e) => {
    e?.preventDefault();
    setSaving(true);
    try {
      await saveStudentPortfolioApi(student.id, {
        projectTitle: portfolio.projectTitle,
        projectDescription: portfolio.projectDescription,
        studentQuote: portfolio.studentQuote,
        keyStrengths: portfolio.keyStrengths,
        developmentAreas: portfolio.developmentAreas,
        mentorRemarks: portfolio.mentorRemarks,
        projectFile: portfolio.projectFile,
        studentPhoto: portfolio.studentPhoto,
        additionalFiles: portfolio.additionalFiles
      });
      showToast('success', 'Portfolio Saved', 'Student text & file data updated successfully!');
      if (onUpdated) onUpdated();
    } catch (err) {
      showToast('error', 'Save Error', err.message || 'Failed to save student data.');
    } finally {
      setSaving(false);
    }
  };

  // Razorpay Checkout Trigger
  const handlePayWithRazorpay = async () => {
    setPaying(true);
    try {
      // 1. Ensure Razorpay checkout script is loaded
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        throw new Error('Could not load Razorpay payment SDK. Please verify internet connection.');
      }

      // 2. Request backend to create Razorpay Order
      const orderRes = await createRazorpayOrderApi({
        studentId: student.id,
        amount: 499
      });

      if (!orderRes || !orderRes.orderId) {
        throw new Error('Failed to generate Razorpay order ID.');
      }

      const activeKey = orderRes.keyId || portfolio.razorpayKeyId || import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!activeKey) {
        throw new Error('Razorpay Key ID is not configured on the client or server.');
      }

      // 3. Configure Razorpay options
      const options = {
        key: activeKey,
        amount: orderRes.amount || 49900,
        currency: orderRes.currency || 'INR',
        name: 'Technik Olympiad Private Limited',
        description: `Technik Skill Compass Report - ${portfolio.studentName}`,
        image: '/assets/logo.png',
        order_id: orderRes.orderId,
        handler: async function (response) {
          try {
            if (!response || !response.razorpay_payment_id || !response.razorpay_signature) {
              throw new Error('Incomplete payment response received from Razorpay gateway.');
            }

            // 4. Verify Payment securely with backend
            const verifyRes = await verifyRazorpayPaymentApi({
              studentId: student.id,
              razorpayOrderId: response.razorpay_order_id || orderRes.orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature
            });

            if (verifyRes && verifyRes.success) {
              setPortfolio(prev => ({
                ...prev,
                paymentStatus: 'PAID',
                amountPaid: 499
              }));
              showToast('success', 'Payment Successful!', 'Technik Skill Compass Report & 4 Reports Unlocked!');
              setActiveTab('report');
              if (onUpdated) onUpdated();
            } else {
              throw new Error(verifyRes?.error || 'Payment verification failed on the server.');
            }
          } catch (verErr) {
            showToast('error', 'Verification Failed', verErr.message || 'Payment verification error.');
          }
        },
        prefill: {
          name: portfolio.studentName,
          email: 'school@technikolympiad.com',
          contact: '+91 95004 28800'
        },
        theme: {
          color: '#2563eb'
        },
        modal: {
          ondismiss: function () {
            setPaying(false);
          }
        }
      };

      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (resp) {
          const failureMsg = resp.error?.description || resp.error?.reason || 'Transaction was declined by payment gateway.';
          showToast('error', 'Payment Failed', failureMsg);
          setPaying(false);
        });
        rzp.open();
      } else {
        throw new Error('Razorpay Checkout SDK is not available in window. Please refresh and check your internet connection.');
      }
    } catch (err) {
      showToast('error', 'Payment Error', err.message || 'Unable to open Razorpay payment gateway.');
    } finally {
      setPaying(false);
    }
  };

  // Copy shareable report link
  const handleCopyShareLink = () => {
    const shareUrl = `${window.location.origin}/awards?report=${portfolio.registrationNumber || student.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopySuccess(true);
    showToast('info', 'Link Copied', 'Shareable report link copied to clipboard!');
    setTimeout(() => setCopySuccess(false), 3000);
  };

  // Print/Download trigger
  const handlePrintDocument = (docType) => {
    window.print();
  };

  const isUnlocked = portfolio.paymentStatus === 'PAID' || portfolio.paymentStatus === 'UNLOCKED';

  // Radar chart SVG calculation for 6 dimensions
  const radarDimensions = [
    { label: 'Achievement & Knowledge', score: portfolio.achievementScore || 4.8, avg: 3.9 },
    { label: 'Innovation & Problem Solving', score: portfolio.innovationScore || 4.8, avg: 3.8 },
    { label: 'Creativity & Originality', score: portfolio.creativityScore || 4.3, avg: 3.7 },
    { label: 'Communication & Presentation', score: portfolio.communicationScore || 4.3, avg: 3.6 },
    { label: 'Leadership & Initiative', score: portfolio.leadershipScore || 4.0, avg: 3.5 },
    { label: 'Social Responsibility & Impact', score: portfolio.socialImpactScore || 4.3, avg: 3.9 }
  ];

  const cx = 160;
  const cy = 150;
  const r = 90;

  const getCoordinates = (index, value) => {
    const angle = (index * 2 * Math.PI) / 6 - Math.PI / 2;
    const distance = (value / 5) * r;
    return {
      x: cx + distance * Math.cos(angle),
      y: cy + distance * Math.sin(angle)
    };
  };

  const studentPolygon = radarDimensions.map((d, i) => {
    const coord = getCoordinates(i, d.score);
    return `${coord.x},${coord.y}`;
  }).join(' ');

  const avgPolygon = radarDimensions.map((d, i) => {
    const coord = getCoordinates(i, d.avg);
    return `${coord.x},${coord.y}`;
  }).join(' ');

  return (
    <div style={styles.overlay}>
      <div style={styles.modalCard}>
        
        {/* Toast Alert Banner */}
        {toast && (
          <div style={{
            ...styles.toastNotification,
            background: toast.type === 'success' ? '#064e3b' : toast.type === 'error' ? '#7f1d1d' : '#0f172a',
            borderLeft: `5px solid ${toast.type === 'success' ? '#10b981' : toast.type === 'error' ? '#ef4444' : '#38bdf8'}`
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#ffffff' }}>{toast.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#e2e8f0', marginTop: '2px' }}>{toast.message}</div>
            </div>
            <button onClick={() => setToast(null)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
              <X size={15} />
            </button>
          </div>
        )}

        {/* Modal Top Header */}
        <div style={styles.modalHeader}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span style={styles.headerEyebrow}>TECHNIK PRIDE AWARD PORTFOLIO</span>
              <span style={{
                ...styles.statusTag,
                background: isUnlocked ? '#ecfdf5' : '#fffbeb',
                color: isUnlocked ? '#059669' : '#d97706',
                border: `1px solid ${isUnlocked ? '#a7f3d0' : '#fde68a'}`
              }}>
                {isUnlocked ? (
                  <>
                    <Unlock size={11} style={{ marginRight: '3px' }} />
                    Skill Compass: Unlocked
                  </>
                ) : (
                  <>
                    <Lock size={11} style={{ marginRight: '3px' }} />
                    Skill Compass: Locked
                  </>
                )}
              </span>
            </div>
            <h2 style={styles.modalTitle}>{portfolio.studentName}</h2>
            <p style={styles.modalSub}>
              {portfolio.class} &nbsp;|&nbsp; {portfolio.schoolName} &nbsp;|&nbsp; Reg: <strong>{portfolio.registrationNumber || 'TPA-2026'}</strong>
            </p>
          </div>
          <button onClick={onClose} style={styles.closeBtn} title="Close window">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div style={styles.tabNavRow}>
          <button 
            type="button"
            onClick={() => setActiveTab('portfolio')}
            style={{
              ...styles.tabNavBtn,
              borderBottom: activeTab === 'portfolio' ? '3px solid #2563eb' : '3px solid transparent',
              color: activeTab === 'portfolio' ? '#2563eb' : '#64748b',
              fontWeight: activeTab === 'portfolio' ? 800 : 600
            }}
          >
            <FileText size={16} />
            <span>1. Add Further Data (File &amp; Text)</span>
          </button>

          <button 
            type="button"
            onClick={() => setActiveTab('payment')}
            style={{
              ...styles.tabNavBtn,
              borderBottom: activeTab === 'payment' ? '3px solid #f59e0b' : '3px solid transparent',
              color: activeTab === 'payment' ? '#d97706' : '#64748b',
              fontWeight: activeTab === 'payment' ? 800 : 600
            }}
          >
            <CreditCard size={16} />
            <span>2. Razorpay Payment Gateway {!isUnlocked && <span style={styles.pillBadge}>₹499</span>}</span>
          </button>

          <button 
            type="button"
            onClick={() => setActiveTab('report')}
            style={{
              ...styles.tabNavBtn,
              borderBottom: activeTab === 'report' ? '3px solid #10b981' : '3px solid transparent',
              color: activeTab === 'report' ? '#10b981' : '#64748b',
              fontWeight: activeTab === 'report' ? 800 : 600
            }}
          >
            <Compass size={16} />
            <span>3. Technik Skill Compass Report {isUnlocked && <span style={styles.pillBadgeGreen}>Unlocked</span>}</span>
          </button>
        </div>

        {/* Modal Body Container */}
        <div style={styles.modalBody}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#64748b' }}>
              <Loader2 size={32} className="spin" style={{ margin: '0 auto 0.75rem auto', color: '#2563eb' }} />
              <p style={{ fontWeight: 600 }}>Loading student details and portfolio records...</p>
            </div>
          ) : (
            <>
              {/* ========================================================================= */}
              {/* TAB 1: ADD FURTHER DATA (FILE DATA & TEXT BASED DATA)                      */}
              {/* ========================================================================= */}
              {activeTab === 'portfolio' && (
                <form onSubmit={handleSavePortfolio} style={styles.formContainer}>
                  
                  {/* Notice banner */}
                  <div style={styles.infoBanner}>
                    <Sparkles size={18} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.84rem', color: '#1e3a8a', lineHeight: '1.45' }}>
                      <strong>Approved by Technik Admin:</strong> You can now add comprehensive project data, 
                      student quotes, key strengths, and upload supporting project files &amp; photographs. 
                      This data powers the personalised <strong>Technik Skill Compass Report</strong>.
                    </div>
                  </div>

                  {/* Section A: Text-Based Data */}
                  <div style={styles.sectionCard}>
                    <h3 style={styles.sectionTitle}>
                      <FileText size={16} color="#2563eb" /> Text-Based Information
                    </h3>

                    <div style={styles.formGrid}>
                      <div style={styles.formField}>
                        <label style={styles.label}>
                          Project / Talent Achievement Title <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Smart Water Saver - Automatic Tank Overflow Prevention System"
                          value={portfolio.projectTitle}
                          onChange={(e) => handleChange('projectTitle', e.target.value)}
                          style={styles.input}
                          required
                        />
                      </div>

                      <div style={styles.formField}>
                        <label style={styles.label}>
                          Student Quote / Reflection (Appears on Skill Compass &amp; Certificate)
                        </label>
                        <input
                          type="text"
                          placeholder='e.g. "I created this project to reduce water wastage in our school and community."'
                          value={portfolio.studentQuote}
                          onChange={(e) => handleChange('studentQuote', e.target.value)}
                          style={styles.input}
                        />
                      </div>
                    </div>

                    <div style={styles.formField}>
                      <label style={styles.label}>Detailed Description &amp; Problem Statement</label>
                      <textarea
                        rows={3}
                        placeholder="Explain the background, methodology, execution, and real-world impact of the project..."
                        value={portfolio.projectDescription}
                        onChange={(e) => handleChange('projectDescription', e.target.value)}
                        style={styles.textarea}
                      />
                    </div>

                    <div style={styles.formGrid}>
                      <div style={styles.formField}>
                        <label style={styles.label}>Key Strengths (One per line)</label>
                        <textarea
                          rows={3}
                          placeholder="Strong problem solving and technical understanding&#10;Clear communication and confidence&#10;Purpose-driven innovation with real-world impact"
                          value={portfolio.keyStrengths}
                          onChange={(e) => handleChange('keyStrengths', e.target.value)}
                          style={styles.textarea}
                        />
                      </div>

                      <div style={styles.formField}>
                        <label style={styles.label}>Development Opportunities &amp; Growth Areas</label>
                        <textarea
                          rows={3}
                          placeholder="Further field testing and real-world deployment&#10;Explore advanced features (IoT, mobile alerts)&#10;Continue participation in innovation competitions"
                          value={portfolio.developmentAreas}
                          onChange={(e) => handleChange('developmentAreas', e.target.value)}
                          style={styles.textarea}
                        />
                      </div>
                    </div>

                    <div style={styles.formField}>
                      <label style={styles.label}>Teacher / Mentor Evaluation Remarks</label>
                      <input
                        type="text"
                        placeholder="Demonstrated exceptional curiosity, technical acumen, and dedicated team leadership."
                        value={portfolio.mentorRemarks}
                        onChange={(e) => handleChange('mentorRemarks', e.target.value)}
                        style={styles.input}
                      />
                    </div>
                  </div>

                  {/* Section B: File Data */}
                  <div style={styles.sectionCard}>
                    <h3 style={styles.sectionTitle}>
                      <Upload size={16} color="#10b981" /> File Data &amp; Media Attachments
                    </h3>

                    <div style={styles.formGrid}>
                      {/* Student Photograph */}
                      <div style={styles.uploadBox}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <div style={styles.photoPreviewBox}>
                            {portfolio.studentPhoto ? (
                              <img src={portfolio.studentPhoto} alt="Student" style={styles.photoImg} />
                            ) : (
                              <User size={24} color="#94a3b8" />
                            )}
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a' }}>Student Photograph</div>
                            <div style={{ fontSize: '0.76rem', color: '#64748b' }}>Appears on the Skill Compass report card</div>
                          </div>
                        </div>

                        <label style={styles.fileUploadBtn}>
                          <Upload size={13} />
                          <span>{uploadingPhoto ? 'Uploading...' : portfolio.studentPhoto ? 'Change Photo' : 'Upload Photo'}</span>
                          <input type="file" accept="image/*" onChange={handleStudentPhotoUpload} style={{ display: 'none' }} disabled={uploadingPhoto} />
                        </label>
                      </div>

                      {/* Project File / Presentation Document */}
                      <div style={styles.uploadBox}>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0f172a' }}>Project File / Report (PDF, PPT, DOCX)</div>
                          <div style={{ fontSize: '0.76rem', color: '#64748b' }}>Detailed documentation or presentation</div>
                          {portfolio.projectFile && (
                            <div style={{ fontSize: '0.75rem', color: '#2563eb', marginTop: '4px', fontWeight: 600 }}>
                              Attached: {portfolio.projectFile}
                            </div>
                          )}
                        </div>

                        <label style={styles.fileUploadBtn}>
                          <Upload size={13} />
                          <span>{uploadingDoc ? 'Uploading...' : portfolio.projectFile ? 'Replace Document' : 'Upload Document'}</span>
                          <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" onChange={handleProjectFileUpload} style={{ display: 'none' }} disabled={uploadingDoc} />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit / Save Bar */}
                  <div style={styles.bottomBar}>
                    <button type="submit" disabled={saving} style={styles.saveSubmitBtn}>
                      {saving ? (
                        <>
                          <Loader2 size={16} className="spin" />
                          <span>Saving Student Data...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={16} />
                          <span>Save Student Data &amp; Portfolio</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab(isUnlocked ? 'report' : 'payment')}
                      style={styles.nextStepBtn}
                    >
                      <span>{isUnlocked ? 'View Skill Compass Report' : 'Proceed to Razorpay Payment'}</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>

                </form>
              )}

              {/* ========================================================================= */}
              {/* TAB 2: RAZORPAY PAYMENT GATEWAY                                           */}
              {/* ========================================================================= */}
              {activeTab === 'payment' && (
                <div style={styles.paymentContainer}>
                  
                  {isUnlocked ? (
                    <div style={styles.unlockedSuccessCard}>
                      <div style={styles.successCheckCircle}>
                        <CheckCircle2 size={36} color="#10b981" />
                      </div>
                      <h3 style={styles.successTitle}>Technik Skill Compass Report Unlocked</h3>
                      <p style={styles.successSub}>
                        Official payment of ₹499 has been verified. All 4 reports, diagnostic spider charts, and certificates are fully unlocked.
                      </p>
                      <button onClick={() => setActiveTab('report')} style={styles.viewReportPrimaryBtn}>
                        <Compass size={18} />
                        <span>View Technik Skill Compass Report</span>
                      </button>
                    </div>
                  ) : (
                    <div style={styles.pricingCardWrapper}>
                      
                      {/* Package banner */}
                      <div style={styles.packageBannerHeader}>
                        <span style={styles.goldBadgePill}>OFFICIAL ASSESSMENT PACKAGE</span>
                        <h3 style={styles.packageHeading}>Technik Skill Compass Assessment &amp; 4 Reports</h3>
                        <p style={styles.packageSubHeading}>
                          Unlock student multidimensional evaluation, spider charts, official certificates, and shareable QR verification.
                        </p>
                      </div>

                      {/* 4 Reports Feature Grid (Image 2) */}
                      <div style={styles.fourReportsGrid}>
                        <div style={styles.reportFeatureCard}>
                          <div style={{ ...styles.featureNumCircle, background: '#2563eb' }}>1</div>
                          <div>
                            <div style={styles.featureTitle}>Skill Compass Report (PDF)</div>
                            <div style={styles.featureDesc}>Detailed report with scores, multidimensional radar chart, insights and recommendations.</div>
                          </div>
                        </div>

                        <div style={styles.reportFeatureCard}>
                          <div style={{ ...styles.featureNumCircle, background: '#0284c7' }}>2</div>
                          <div>
                            <div style={styles.featureTitle}>Official Certificate</div>
                            <div style={styles.featureDesc}>Technik Skill Compass Certificate with gold crest, authorized signature and verification seal.</div>
                          </div>
                        </div>

                        <div style={styles.reportFeatureCard}>
                          <div style={{ ...styles.featureNumCircle, background: '#7c3aed' }}>3</div>
                          <div>
                            <div style={styles.featureTitle}>Summary Report (1 Page)</div>
                            <div style={styles.featureDesc}>Quick executive view of scores, strengths, and jury evaluation rating.</div>
                          </div>
                        </div>

                        <div style={styles.reportFeatureCard}>
                          <div style={{ ...styles.featureNumCircle, background: '#059669' }}>4</div>
                          <div>
                            <div style={styles.featureTitle}>Share Report &amp; QR Code</div>
                            <div style={styles.featureDesc}>Generate a public shareable link with QR verification for social media and portfolios.</div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Action Box with Razorpay */}
                      <div style={styles.razorpayCtaBox}>
                        <div style={styles.pricingDetails}>
                          <div style={styles.priceLabel}>Total Assessment &amp; Certification Fee</div>
                          <div style={styles.priceValue}>
                            ₹499 <span style={styles.pricePeriod}>/ one-time</span>
                          </div>
                          <div style={styles.inclusiveText}>Includes all 4 digital downloads &amp; permanent online verification</div>
                        </div>

                        <div style={styles.payBtnGroup}>
                          <button
                            type="button"
                            onClick={handlePayWithRazorpay}
                            disabled={paying}
                            style={styles.razorpayBtn}
                          >
                            {paying ? (
                              <>
                                <Loader2 size={18} className="spin" />
                                <span>Processing Payment...</span>
                              </>
                            ) : (
                              <>
                                <CreditCard size={18} />
                                <span>Pay ₹499 via Razorpay &amp; Unlock</span>
                              </>
                            )}
                          </button>

                          <div style={styles.secureTextRow}>
                            <ShieldCheck size={14} color="#16a34a" />
                            <span>Secured by 256-bit Razorpay Payment Gateway (UPI, Cards, NetBanking)</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              )}

              {/* ========================================================================= */}
              {/* TAB 3: TECHNIK SKILL COMPASS REPORT (IMAGE 1 & IMAGE 2)                   */}
              {/* ========================================================================= */}
              {activeTab === 'report' && (
                <div style={styles.reportContainer}>
                  
                  {!isUnlocked ? (
                    <div style={styles.lockedTeaserBanner}>
                      <Lock size={24} color="#d97706" />
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#92400e' }}>
                          Technik Skill Compass Report is currently Locked
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#b45309' }}>
                          Please complete the one-time Razorpay payment of ₹499 to unlock all 4 reports, dimension charts, and certificates.
                        </div>
                      </div>
                      <button onClick={() => setActiveTab('payment')} style={styles.unlockNowBtn}>
                        Unlock with Razorpay &rarr;
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Top Banner (IMAGE 1) */}
                      <div style={styles.reportHeaderCard}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <h2 style={styles.reportMainTitle}>Technik Skill Compass Report</h2>
                              <span style={styles.unlockedPill}>
                                <CheckCircle2 size={12} /> Unlocked
                              </span>
                            </div>
                            <p style={styles.reportTagline}>
                              Your personalised report is ready. Explore your strengths, insights and future opportunities.
                            </p>
                          </div>

                          <div style={styles.reportSelectorBadge}>
                            <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Report for</span>
                            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>
                              {portfolio.registrationNumber} - {portfolio.studentName}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Student Profile Card (IMAGE 1) */}
                      <div style={styles.studentProfileGrid}>
                        <div style={styles.studentBioBox}>
                          <div style={styles.profileAvatarBox}>
                            {portfolio.studentPhoto ? (
                              <img src={portfolio.studentPhoto} alt={portfolio.studentName} style={styles.avatarPhoto} />
                            ) : (
                              <div style={styles.fallbackAvatarCircle}>
                                {portfolio.studentName.charAt(0)}
                              </div>
                            )}
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                              <h3 style={styles.profileName}>{portfolio.studentName}</h3>
                              <span style={styles.prideBadge}>Pride Awardee</span>
                            </div>

                            <div style={styles.metaRow}>
                              <span style={styles.metaLabel}><GraduationCap size={13} /> Class:</span>
                              <span style={styles.metaValue}>{portfolio.class}</span>
                            </div>

                            <div style={styles.metaRow}>
                              <span style={styles.metaLabel}><Building2 size={13} /> School:</span>
                              <span style={styles.metaValue}>{portfolio.schoolName}</span>
                            </div>

                            <div style={styles.metaRow}>
                              <span style={styles.metaLabel}><Tag size={13} /> Category:</span>
                              <span style={styles.metaValue}>{portfolio.category}</span>
                            </div>

                            <div style={styles.metaRow}>
                              <span style={styles.metaLabel}><Trophy size={13} /> Achievement:</span>
                              <span style={styles.metaValueHighlight}>
                                {portfolio.projectTitle || portfolio.achievementTitle || 'Smart Water Saver - Automatic Tank Overflow Prevention System'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Student Quote (IMAGE 1) */}
                        <div style={styles.quoteCard}>
                          <div style={styles.quoteMark}>“</div>
                          <p style={styles.quoteText}>
                            {portfolio.studentQuote || "I created this project to reduce water wastage in our school and community."}
                          </p>
                          <div style={styles.quoteAuthor}>— {portfolio.studentName}</div>
                        </div>

                        {/* Congratulations Box (IMAGE 1) */}
                        <div style={styles.congratsBox}>
                          <div style={styles.trophyCircle}>
                            <Trophy size={28} color="#d97706" />
                          </div>
                          <h4 style={styles.congratsTitle}>Congratulations!</h4>
                          <p style={styles.congratsText}>
                            You have unlocked your Technik Skill Compass Report. Keep learning. Keep exploring. Keep making an impact!
                          </p>
                        </div>
                      </div>

                      {/* Main Analytics Dashboard: 3 Columns (IMAGE 1) */}
                      <div style={styles.dashboardThreeCol}>
                        
                        {/* Column 1: Radar Spider Web Chart (IMAGE 1) */}
                        <div style={styles.colCard}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                            <Compass size={18} color="#2563eb" />
                            <h4 style={styles.colCardTitle}>Your Technik Skill Compass</h4>
                          </div>
                          <p style={styles.colCardSub}>A multidimensional view of your strengths and growth areas.</p>

                          <div style={styles.radarWrapper}>
                            <svg width="320" height="300" viewBox="0 0 320 300" style={styles.radarSvg}>
                              {/* Concentric Hexagons */}
                              {[1, 2, 3, 4, 5].map((lvl) => {
                                const pts = [0, 1, 2, 3, 4, 5].map(i => {
                                  const c = getCoordinates(i, lvl);
                                  return `${c.x},${c.y}`;
                                }).join(' ');
                                return (
                                  <polygon
                                    key={lvl}
                                    points={pts}
                                    fill="none"
                                    stroke="#e2e8f0"
                                    strokeWidth="1"
                                    strokeDasharray={lvl === 5 ? 'none' : '2 2'}
                                  />
                                );
                              })}

                              {/* Axis Lines */}
                              {[0, 1, 2, 3, 4, 5].map((i) => {
                                const c = getCoordinates(i, 5);
                                return (
                                  <line
                                    key={i}
                                    x1={cx}
                                    y1={cy}
                                    x2={c.x}
                                    y2={c.y}
                                    stroke="#cbd5e1"
                                    strokeWidth="1"
                                  />
                                );
                              })}

                              {/* Finalist Average Polygon */}
                              <polygon
                                points={avgPolygon}
                                fill="none"
                                stroke="#94a3b8"
                                strokeWidth="2"
                                strokeDasharray="3 3"
                              />

                              {/* Student Score Polygon */}
                              <polygon
                                points={studentPolygon}
                                fill="rgba(37, 99, 235, 0.22)"
                                stroke="#2563eb"
                                strokeWidth="2.5"
                              />

                              {/* Student Vertex Points */}
                              {radarDimensions.map((d, i) => {
                                const c = getCoordinates(i, d.score);
                                return (
                                  <circle
                                    key={i}
                                    cx={c.x}
                                    cy={c.y}
                                    r="4"
                                    fill="#2563eb"
                                    stroke="#ffffff"
                                    strokeWidth="1.5"
                                  />
                                );
                              })}

                              {/* Dimension Labels & Scores */}
                              <text x={cx} y={40} textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">
                                Achievement &amp; Knowledge (4.8)
                              </text>
                              <text x={265} y={105} textAnchor="start" fontSize="10" fontWeight="700" fill="#0f172a">
                                Innovation (4.8)
                              </text>
                              <text x={265} y={205} textAnchor="start" fontSize="10" fontWeight="700" fill="#0f172a">
                                Creativity (4.3)
                              </text>
                              <text x={cx} y={265} textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">
                                Communication (4.3)
                              </text>
                              <text x={55} y={205} textAnchor="end" fontSize="10" fontWeight="700" fill="#0f172a">
                                Leadership (4.0)
                              </text>
                              <text x={55} y={105} textAnchor="end" fontSize="10" fontWeight="700" fill="#0f172a">
                                Social Impact (4.3)
                              </text>
                            </svg>
                          </div>

                          <div style={styles.legendRow}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#2563eb', fontWeight: 700 }}>
                              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb' }} /> Your Score
                            </span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#94a3b8' }} /> Finalist Average
                            </span>
                          </div>

                          <div style={styles.bottomInspireQuote}>
                            “The Technik Skill Compass helps me understand my strengths and inspires me to keep learning and solving real-world problems.”
                            <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '4px' }}>— {portfolio.studentName}</div>
                          </div>
                        </div>

                        {/* Column 2: Dimension-wise Scores & Growth Mindset (IMAGE 1) */}
                        <div style={styles.colCard}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                            <TrendingUp size={18} color="#059669" />
                            <h4 style={styles.colCardTitle}>Dimension-wise Scores</h4>
                          </div>

                          <div style={styles.dimensionList}>
                            {radarDimensions.map((d, idx) => (
                              <div key={idx} style={styles.dimRow}>
                                <div style={styles.dimHeader}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    {idx === 0 && <GraduationCap size={15} color="#2563eb" />}
                                    {idx === 1 && <Lightbulb size={15} color="#059669" />}
                                    {idx === 2 && <Palette size={15} color="#d97706" />}
                                    {idx === 3 && <MessageSquare size={15} color="#7c3aed" />}
                                    {idx === 4 && <Users size={15} color="#dc2626" />}
                                    {idx === 5 && <Leaf size={15} color="#0d9488" />}
                                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>{d.label}</span>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>{d.score} / 5</span>
                                    <span style={{
                                      fontSize: '0.7rem',
                                      fontWeight: 800,
                                      padding: '0.15rem 0.45rem',
                                      borderRadius: '4px',
                                      background: d.score >= 4.5 ? '#dcfce7' : '#fef3c7',
                                      color: d.score >= 4.5 ? '#166534' : '#92400e'
                                    }}>
                                      {d.score >= 4.5 ? 'Exceptional' : 'Strong'}
                                    </span>
                                  </div>
                                </div>

                                <div style={styles.progressBarTrack}>
                                  <div style={{
                                    ...styles.progressBarFill,
                                    width: `${(d.score / 5) * 100}%`,
                                    background: idx === 0 ? '#2563eb' : idx === 1 ? '#059669' : idx === 2 ? '#d97706' : idx === 3 ? '#7c3aed' : idx === 4 ? '#dc2626' : '#0d9488'
                                  }} />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Your Growth Mindset Card */}
                          <div style={styles.growthMindsetBox}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                              <Leaf size={16} color="#16a34a" />
                              <strong style={{ fontSize: '0.85rem', color: '#166534' }}>Your Growth Mindset</strong>
                            </div>
                            <p style={{ fontSize: '0.78rem', color: '#334155', margin: 0, lineHeight: '1.4' }}>
                              You have shown strong technical skills, creativity and a commitment to make a positive impact. Continue to explore, learn and lead.
                            </p>
                          </div>
                        </div>

                        {/* Column 3: 4 Reports Downloads & Action Items (IMAGE 1 & 2) */}
                        <div style={styles.colCard}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                            <Download size={18} color="#2563eb" />
                            <h4 style={styles.colCardTitle}>Download Your Reports</h4>
                          </div>

                          {/* 4 Interactive Reports Download Action Links (IMAGE 1 & 2) */}
                          <div style={styles.reportsDownloadList}>
                            
                            <div style={styles.downloadItemRow}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FileText size={18} color="#ef4444" />
                                <div>
                                  <div style={styles.dlTitle}>Skill Compass Report (PDF)</div>
                                  <div style={styles.dlSub}>Detailed report with scores, insights and recommendations</div>
                                </div>
                              </div>
                              <button onClick={() => handlePrintDocument('report')} style={styles.dlBtn} title="Download/Print PDF">
                                <Download size={15} />
                              </button>
                            </div>

                            <div style={styles.downloadItemRow}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Award size={18} color="#d97706" />
                                <div>
                                  <div style={styles.dlTitle}>Official Certificate</div>
                                  <div style={styles.dlSub}>Technik Skill Compass Certificate with crest &amp; seal</div>
                                </div>
                              </div>
                              <button onClick={() => handlePrintDocument('certificate')} style={styles.dlBtn} title="Download/Print Certificate">
                                <Download size={15} />
                              </button>
                            </div>

                            <div style={styles.downloadItemRow}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FileText size={18} color="#7c3aed" />
                                <div>
                                  <div style={styles.dlTitle}>Summary Report (1 Page)</div>
                                  <div style={styles.dlSub}>Quick view of scores, strengths &amp; jury rating</div>
                                </div>
                              </div>
                              <button onClick={() => handlePrintDocument('summary')} style={styles.dlBtn} title="Download/Print 1-Page Summary">
                                <Download size={15} />
                              </button>
                            </div>

                            <div style={styles.downloadItemRow}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Share2 size={18} color="#059669" />
                                <div>
                                  <div style={styles.dlTitle}>Share Report &amp; QR Code</div>
                                  <div style={styles.dlSub}>Generate a shareable link / QR code</div>
                                </div>
                              </div>
                              <button onClick={handleCopyShareLink} style={styles.dlBtn} title="Copy shareable link">
                                {copySuccess ? <Check size={15} color="#16a34a" /> : <Copy size={15} />}
                              </button>
                            </div>

                          </div>

                          {/* Key Strengths */}
                          <div style={styles.sideInfoBox}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                              <Star size={14} color="#2563eb" fill="#2563eb" />
                              <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>Key Strengths</strong>
                            </div>
                            <ul style={styles.checkUl}>
                              <li><CheckCircle2 size={12} color="#16a34a" /> Strong problem solving and technical understanding</li>
                              <li><CheckCircle2 size={12} color="#16a34a" /> Clear communication and confidence</li>
                              <li><CheckCircle2 size={12} color="#16a34a" /> Purpose-driven innovation with real-world impact</li>
                            </ul>
                          </div>

                          {/* Development Opportunities */}
                          <div style={styles.sideInfoBox}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                              <TrendingUp size={14} color="#d97706" />
                              <strong style={{ fontSize: '0.82rem', color: '#0f172a' }}>Development Opportunities</strong>
                            </div>
                            <ul style={styles.checkUl}>
                              <li><CheckCircle2 size={12} color="#f59e0b" /> Further field testing and real-world deployment</li>
                              <li><CheckCircle2 size={12} color="#f59e0b" /> Explore advanced features (IoT, mobile alerts)</li>
                              <li><CheckCircle2 size={12} color="#f59e0b" /> Continue participation in innovation competitions</li>
                            </ul>
                          </div>

                        </div>

                      </div>

                      {/* Footer Badge Bar */}
                      <div style={styles.footerCreditBar}>
                        <span>Innovate • Compete • Excel</span>
                        <span>5 States + 1 Union Territory &nbsp;|&nbsp; Building Future-Ready Students</span>
                      </div>
                    </>
                  )}

                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.82)',
    backdropFilter: 'blur(8px)',
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    overflowY: 'auto'
  },
  modalCard: {
    background: '#ffffff',
    borderRadius: '20px',
    maxWidth: '1180px',
    width: '100%',
    maxHeight: '92vh',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden'
  },
  modalHeader: {
    padding: '1.25rem 1.75rem',
    borderBottom: '1px solid #f1f5f9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    background: '#fafafa'
  },
  headerEyebrow: {
    fontSize: '0.72rem',
    fontWeight: 800,
    color: '#2563eb',
    letterSpacing: '0.08em',
    textTransform: 'uppercase'
  },
  statusTag: {
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '0.2rem 0.5rem',
    borderRadius: '6px',
    display: 'inline-flex',
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: '0.2rem 0 0.1rem 0'
  },
  modalSub: {
    fontSize: '0.84rem',
    color: '#64748b',
    margin: 0
  },
  closeBtn: {
    background: '#f1f5f9',
    border: 'none',
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    cursor: 'pointer',
    color: '#64748b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s'
  },
  tabNavRow: {
    display: 'flex',
    borderBottom: '1px solid #e2e8f0',
    background: '#ffffff',
    padding: '0 1.5rem',
    gap: '1.25rem',
    overflowX: 'auto'
  },
  tabNavBtn: {
    background: 'none',
    border: 'none',
    padding: '0.9rem 0.5rem',
    cursor: 'pointer',
    fontSize: '0.86rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.45rem',
    whiteSpace: 'nowrap',
    transition: 'all 0.15s'
  },
  pillBadge: {
    fontSize: '0.7rem',
    fontWeight: 800,
    background: '#fef3c7',
    color: '#b45309',
    padding: '0.15rem 0.45rem',
    borderRadius: '12px',
    marginLeft: '4px'
  },
  pillBadgeGreen: {
    fontSize: '0.7rem',
    fontWeight: 800,
    background: '#dcfce7',
    color: '#166534',
    padding: '0.15rem 0.45rem',
    borderRadius: '12px',
    marginLeft: '4px'
  },
  modalBody: {
    padding: '1.5rem 1.75rem',
    overflowY: 'auto',
    flex: 1
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },
  infoBanner: {
    display: 'flex',
    gap: '0.75rem',
    background: '#eff6ff',
    border: '1px solid #bfdbfe',
    borderRadius: '12px',
    padding: '0.85rem 1.1rem'
  },
  sectionCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  sectionTitle: {
    fontSize: '0.95rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem'
  },
  formField: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem'
  },
  label: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#334155'
  },
  input: {
    padding: '0.65rem 0.85rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '0.85rem',
    color: '#0f172a',
    outline: 'none',
    transition: 'border 0.2s'
  },
  textarea: {
    padding: '0.65rem 0.85rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    fontSize: '0.85rem',
    color: '#0f172a',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit'
  },
  uploadBox: {
    background: '#f8fafc',
    border: '1px dashed #cbd5e1',
    borderRadius: '12px',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem'
  },
  photoPreviewBox: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: '#e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #ffffff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  },
  photoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  fileUploadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '0.45rem 0.85rem',
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#334155',
    cursor: 'pointer',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
    paddingTop: '0.5rem'
  },
  saveSubmitBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.4rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.86rem',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)'
  },
  nextStepBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: '#eff6ff',
    color: '#2563eb',
    border: '1px solid #bfdbfe',
    padding: '0.75rem 1.25rem',
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '0.84rem',
    cursor: 'pointer'
  },

  // Payment tab styles
  paymentContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem 0'
  },
  pricingCardWrapper: {
    maxWidth: '820px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },
  packageBannerHeader: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
    borderRadius: '16px',
    padding: '1.75rem',
    color: '#ffffff',
    textAlign: 'center'
  },
  goldBadgePill: {
    background: 'rgba(251, 191, 36, 0.18)',
    color: '#fbbf24',
    border: '1px solid rgba(251, 191, 36, 0.4)',
    fontSize: '0.72rem',
    fontWeight: 800,
    padding: '0.2rem 0.65rem',
    borderRadius: '20px',
    letterSpacing: '0.06em'
  },
  packageHeading: {
    fontSize: '1.35rem',
    fontWeight: 800,
    color: '#ffffff',
    margin: '0.6rem 0 0.3rem 0'
  },
  packageSubHeading: {
    fontSize: '0.86rem',
    color: '#cbd5e1',
    margin: 0,
    maxWidth: '620px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  fourReportsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '0.85rem'
  },
  reportFeatureCard: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1rem',
    display: 'flex',
    gap: '0.75rem'
  },
  featureNumCircle: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    color: '#ffffff',
    fontWeight: 800,
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  featureTitle: {
    fontSize: '0.84rem',
    fontWeight: 800,
    color: '#0f172a'
  },
  featureDesc: {
    fontSize: '0.74rem',
    color: '#64748b',
    marginTop: '2px',
    lineHeight: '1.35'
  },
  razorpayCtaBox: {
    background: '#ffffff',
    border: '2px solid #2563eb',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.25rem',
    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.12)'
  },
  pricingDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
  priceLabel: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#64748b'
  },
  priceValue: {
    fontSize: '2rem',
    fontWeight: 900,
    color: '#0f172a',
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.4rem'
  },
  pricePeriod: {
    fontSize: '0.84rem',
    fontWeight: 600,
    color: '#64748b'
  },
  inclusiveText: {
    fontSize: '0.74rem',
    color: '#16a34a',
    fontWeight: 600
  },
  payBtnGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.4rem'
  },
  razorpayBtn: {
    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    color: '#ffffff',
    border: 'none',
    padding: '0.85rem 1.6rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.92rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
    transition: 'all 0.2s'
  },
  secureTextRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.72rem',
    color: '#475569'
  },
  unlockedSuccessCard: {
    textAlign: 'center',
    padding: '3rem 2rem',
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '16px',
    maxWidth: '560px',
    width: '100%',
    margin: '0 auto'
  },
  successCheckCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#dcfce7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto'
  },
  successTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#166534',
    margin: '0 0 0.5rem 0'
  },
  successSub: {
    fontSize: '0.86rem',
    color: '#15803d',
    lineHeight: '1.45',
    marginBottom: '1.5rem'
  },
  viewReportPrimaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#16a34a',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '10px',
    fontWeight: 800,
    fontSize: '0.88rem',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)'
  },

  // Report view styles (IMAGE 1 & 2)
  reportContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },
  lockedTeaserBanner: {
    background: '#fffbeb',
    border: '1px solid #fde68a',
    borderRadius: '14px',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  unlockNowBtn: {
    background: '#d97706',
    color: '#ffffff',
    border: 'none',
    padding: '0.6rem 1.1rem',
    borderRadius: '8px',
    fontWeight: 800,
    fontSize: '0.82rem',
    cursor: 'pointer'
  },
  reportHeaderCard: {
    borderLeft: '4px solid #d97706',
    background: '#ffffff',
    padding: '1rem 1.25rem',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    borderLeftWidth: '5px',
    borderLeftColor: '#d97706'
  },
  reportMainTitle: {
    fontSize: '1.3rem',
    fontWeight: 900,
    color: '#0f172a',
    margin: 0
  },
  unlockedPill: {
    background: '#10b981',
    color: '#ffffff',
    fontSize: '0.72rem',
    fontWeight: 800,
    padding: '0.15rem 0.5rem',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3px'
  },
  reportTagline: {
    fontSize: '0.84rem',
    color: '#64748b',
    margin: '0.2rem 0 0 0'
  },
  reportSelectorBadge: {
    background: '#f8fafc',
    border: '1px solid #cbd5e1',
    padding: '0.4rem 0.85rem',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
  },
  studentProfileGrid: {
    display: 'grid',
    gridTemplateColumns: '1.6fr 1.2fr 1fr',
    gap: '1rem'
  },
  studentBioBox: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '1.25rem',
    display: 'flex',
    gap: '1rem'
  },
  profileAvatarBox: {
    width: '80px',
    height: '92px',
    borderRadius: '10px',
    overflow: 'hidden',
    background: '#f1f5f9',
    flexShrink: 0,
    border: '1px solid #cbd5e1'
  },
  avatarPhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  fallbackAvatarCircle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.75rem',
    fontWeight: 900,
    color: '#ffffff',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  },
  profileName: {
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: 0
  },
  prideBadge: {
    background: '#fef3c7',
    color: '#b45309',
    border: '1px solid #fde047',
    fontSize: '0.68rem',
    fontWeight: 800,
    padding: '0.15rem 0.5rem',
    borderRadius: '6px'
  },
  metaRow: {
    display: 'flex',
    gap: '0.35rem',
    fontSize: '0.78rem',
    marginTop: '0.25rem',
    alignItems: 'baseline'
  },
  metaLabel: {
    color: '#64748b',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3px',
    width: '95px',
    flexShrink: 0
  },
  metaValue: {
    color: '#1e293b',
    fontWeight: 600
  },
  metaValueHighlight: {
    color: '#2563eb',
    fontWeight: 700
  },
  quoteCard: {
    background: '#fffbeb',
    border: '1px solid #fde68a',
    borderRadius: '14px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative'
  },
  quoteMark: {
    fontSize: '2.5rem',
    color: '#d97706',
    lineHeight: 0.8,
    fontFamily: 'serif'
  },
  quoteText: {
    fontSize: '0.84rem',
    fontWeight: 600,
    color: '#78350f',
    fontStyle: 'italic',
    lineHeight: '1.45',
    margin: '0.3rem 0'
  },
  quoteAuthor: {
    fontSize: '0.76rem',
    fontWeight: 700,
    color: '#92400e',
    textAlign: 'right'
  },
  congratsBox: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '1.25rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trophyCircle: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    background: '#fef3c7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem'
  },
  congratsTitle: {
    fontSize: '0.95rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: '0 0 0.2rem 0'
  },
  congratsText: {
    fontSize: '0.74rem',
    color: '#64748b',
    lineHeight: '1.35',
    margin: 0
  },
  dashboardThreeCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem'
  },
  colCard: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '14px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column'
  },
  colCardTitle: {
    fontSize: '0.92rem',
    fontWeight: 800,
    color: '#0f172a',
    margin: 0
  },
  colCardSub: {
    fontSize: '0.74rem',
    color: '#64748b',
    margin: '0 0 0.75rem 0'
  },
  radarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  },
  radarSvg: {
    overflow: 'visible'
  },
  legendRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    margin: '0.5rem 0'
  },
  bottomInspireQuote: {
    fontSize: '0.74rem',
    color: '#475569',
    fontStyle: 'italic',
    lineHeight: '1.35',
    background: '#f8fafc',
    padding: '0.6rem 0.8rem',
    borderRadius: '8px',
    marginTop: 'auto'
  },
  dimensionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  dimRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  dimHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  progressBarTrack: {
    height: '6px',
    background: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.6s ease'
  },
  growthMindsetBox: {
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '10px',
    padding: '0.75rem',
    marginTop: '1.25rem'
  },
  reportsDownloadList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    marginBottom: '1rem'
  },
  downloadItemRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '0.6rem 0.75rem'
  },
  dlTitle: {
    fontSize: '0.78rem',
    fontWeight: 700,
    color: '#0f172a'
  },
  dlSub: {
    fontSize: '0.68rem',
    color: '#64748b'
  },
  dlBtn: {
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#2563eb',
    flexShrink: 0
  },
  sideInfoBox: {
    background: '#ffffff',
    border: '1px solid #f1f5f9',
    borderRadius: '8px',
    padding: '0.6rem',
    marginTop: '0.5rem'
  },
  checkUl: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
    fontSize: '0.72rem',
    color: '#334155'
  },
  footerCreditBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.74rem',
    color: '#64748b',
    borderTop: '1px solid #e2e8f0',
    paddingTop: '0.75rem',
    marginTop: '0.5rem'
  },
  toastNotification: {
    position: 'absolute',
    top: '16px',
    right: '20px',
    zIndex: 999999,
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.6rem',
    minWidth: '280px',
    maxWidth: '400px'
  }
};
