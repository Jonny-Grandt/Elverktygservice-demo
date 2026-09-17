import React, { useState } from 'react';
import { CalendarCheck, Building2, User, Upload, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';
import { ConfirmationModal } from './ConfirmationModal';

export function BookingForm({ onToast }) {
  const [customerType, setCustomerType] = useState('Företag');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    issue_type: '',
    description: '',
  });
  const [fileName, setFileName] = useState('');
  const [confirmationData, setConfirmationData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderNum = `EV-${Math.floor(10000 + Math.random() * 90000)}`;
    setConfirmationData({
      ...formData,
      customerType,
      orderCode: orderNum
    });

    if (onToast) {
      onToast(`Serviceförfrågan registrerad med nummer ${orderNum}!`);
    }
  };

  return (
    <section id="inlamning" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="card-panel rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Föranmäl Din Reparation</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[var(--text-main)] tracking-tight">
              Boka Service / Begär Kostnadsförslag
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
              Fyll i formuläret nedan för snabbare hantering vid inlämning eller för att få ett prisuppskattat kostnadsförslag.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Customer Type Choice */}
            <div>
              <label className="block text-xs font-bold text-[var(--text-main)] uppercase tracking-wider mb-2">
                Kundtyp <span className="text-amber-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCustomerType('Företag')}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition ${
                    customerType === 'Företag'
                      ? 'bg-amber-500/15 border-amber-500 text-amber-500 ring-1 ring-amber-500'
                      : 'bg-[var(--bg-darker)] border-[var(--border-glass)] text-[var(--text-muted)] hover:border-amber-500/50'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Företag / Byggfirma</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCustomerType('Privatperson')}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition ${
                    customerType === 'Privatperson'
                      ? 'bg-amber-500/15 border-amber-500 text-amber-500 ring-1 ring-amber-500'
                      : 'bg-[var(--bg-darker)] border-[var(--border-glass)] text-[var(--text-muted)] hover:border-amber-500/50'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Privatperson</span>
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                  Namn / Företagsnamn <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="t.ex. Byggtjänst i Jönköping AB"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[var(--bg-darker)] border border-[var(--border-glass)] text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                  E-postadress <span className="text-amber-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="namn@foretag.se"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[var(--bg-darker)] border border-[var(--border-glass)] text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                  Telefonnummer <span className="text-amber-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="036-18 70 80"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[var(--bg-darker)] border border-[var(--border-glass)] text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                  Verktygsmärke <span className="text-amber-500">*</span>
                </label>
                <select
                  name="brand"
                  required
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[var(--bg-darker)] border border-[var(--border-glass)] text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-amber-500 transition"
                >
                  <option value="" disabled>Välj fabrikat...</option>
                  <option value="Makita">Makita</option>
                  <option value="Paslode">Paslode / Spit</option>
                  <option value="DeWalt">DeWalt</option>
                  <option value="Milwaukee">Milwaukee</option>
                  <option value="Bosch">Bosch Professional</option>
                  <option value="Festool">Festool</option>
                  <option value="HiKOKI">HiKOKI / Hitachi</option>
                  <option value="Fein">Fein</option>
                  <option value="Metabo">Metabo</option>
                  <option value="Husqvarna">Husqvarna</option>
                  <option value="Mosquito Magnet">Mosquito Magnet</option>
                  <option value="Annat märke">Annat märke</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                  Modell / Typbeteckning
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="t.ex. DHR242, IM350, DWE4206"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[var(--bg-darker)] border border-[var(--border-glass)] text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                  Typ av fel / Servicetyp <span className="text-amber-500">*</span>
                </label>
                <select
                  name="issue_type"
                  required
                  value={formData.issue_type}
                  onChange={handleChange}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[var(--bg-darker)] border border-[var(--border-glass)] text-xs sm:text-sm text-[var(--text-main)] focus:outline-none focus:border-amber-500 transition"
                >
                  <option value="" disabled>Välj servicetyp...</option>
                  <option value="Garantireparation">Garantireparation (med kvitto/garantibevis)</option>
                  <option value="Startar ej">Maskinen startar inte alls</option>
                  <option value="Dålig effekt / Slirar">Dålig slageffekt / Slirande växelhus</option>
                  <option value="Gnistor / Rök / Lukt">Gnistor från kolborstar / Röklukt</option>
                  <option value="Gas / Tändningsfel spikpistol">Gas- / tändningsfel på spikpistol</option>
                  <option value="Mosquito Magnet Säsongsservice">Mosquito Magnet Säsongsservice</option>
                  <option value="Skadad sladd / kontakt">Skadad nätkabel / kontakt</option>
                  <option value="Periodisk elsäkerhetsservice">Förebyggande elsäkerhetsservice</option>
                  <option value="Förfrågan reservdelar">Endast förfrågan om reservdelar</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                Beskrivning av symptom eller önskemål
              </label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Beskriv vad som hände när felet uppstod, om du vill ha ett prisförslag innan reparering påbörjas, etc."
                className="w-full py-2.5 px-3.5 rounded-xl bg-[var(--bg-darker)] border border-[var(--border-glass)] text-xs sm:text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-amber-500 transition resize-y"
              />
            </div>

            {/* File upload */}
            <div>
              <label className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                Bifoga foto på typskylt eller skada (valfritt)
              </label>
              <label className="flex flex-col items-center justify-center p-5 border-2 border-dashed border-[var(--border-glass)] rounded-xl cursor-pointer bg-[var(--bg-darker)]/50 hover:bg-[var(--bg-darker)] hover:border-amber-500/50 transition">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-main)]">
                  {fileName ? (
                    <>
                      <FileCheck className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-400">{fileName}</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5 text-amber-500" />
                      <span>Klicka här för att välja en bild</span>
                    </>
                  )}
                </div>
                <span className="text-[11px] text-[var(--text-subtle)] mt-1">
                  Skärpa på märkskylt/serienummer underlättar felsökningen (JPG, PNG, max 10MB)
                </span>
              </label>
            </div>

            {/* Bottom button & GDPR */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] text-[var(--text-subtle)]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dina uppgifter behandlas säkert enligt GDPR och lämnas aldrig ut.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-sm shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition flex items-center justify-center gap-2"
              >
                <span>Skicka Föranmälan / Begär Pris</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={Boolean(confirmationData)}
        onClose={() => setConfirmationData(null)}
        data={confirmationData}
      />
    </section>
  );
}
