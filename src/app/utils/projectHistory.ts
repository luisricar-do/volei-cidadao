/**
 * Anos completos entre o início do projeto (ano) e o ano corrente.
 * Usado no selo "Sobre", na seção O IMPACTO DO PROJETO e no card de história.
 */
export function getProjectAgeYears(foundedYear: number): number {
  return Math.max(0, new Date().getFullYear() - foundedYear);
}

export function getAnniversaryBadgeText(foundedYear: number): string {
  const n = getProjectAgeYears(foundedYear);
  if (n <= 0) return "Projeto em construção";
  return n === 1 ? "1 ano de história" : `${n} anos de história`;
}

export function getSinceTooltip(foundedYear: number, foundedMonthLabel?: string): string {
  return foundedMonthLabel
    ? `Desde ${foundedMonthLabel} de ${foundedYear}`
    : `Desde ${foundedYear}`;
}

export function getImpactStatYearsLabel(years: number): string {
  if (years <= 0) return "Anos de história";
  return years === 1 ? "Ano de história" : "Anos de história";
}
